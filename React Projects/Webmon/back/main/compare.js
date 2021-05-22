const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const moveFile = require("move-file");

// Source : https://github.com/mapbox/pixelmatch


/**
 * Fonction qui détecte les changements en pixels en comparant les 2 screenshots (ancien et nouveau)
 * @param {String} oldScreenshot -chemin d'accès vers l'ancien screenshot 
 * @param {String} newScreenshot -chemin d'accès vers le nouveau screenshot
 * @returns {number} renvoie la différence en pixels entre les 2 screenshots 
  ou bien la différence de hauteur entre ces dernières 
  ou -1 en cas d'erreur (accès concurrent)
 */

// Renvoie la différence de deux images en pixels
const detectChanges = async (oldScreenshot, newScreenshot) => {
  // Si le site a été supprimé durant le processus de vérifications des sites modifiés , on renvoie -1

  if (!fs.existsSync(oldScreenshot)) return -1;
  const img1 = PNG.sync.read(fs.readFileSync(oldScreenshot));
  const img2 = PNG.sync.read(fs.readFileSync(newScreenshot));

  if (Math.abs(img2.height - img1.height)) {
    return Math.abs(img2.height - img1.height);
  }
  const { width, height } = img1;

  const numDiffPixels = pixelmatch(img1.data, img2.data, null, width, height, {
    threshold: 0.3,
  });

  // Décommenter pour générer une image qui affiche la différence des deux autres

  // const diff = new PNG({width, height});
  // if(numDiffPixels > 0){
  //   pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
  //   let a = Math.round(Math.random() * 2500);
  //   fs.writeFileSync(`diff${a}.png`, PNG.sync.write(diff));
  // }

  return numDiffPixels;
};

// Recoit l'id d'un site et retourne l'id du site si la différence en pixel est > au seuil , -1 sinon
// Lorsque le site a subi une modification , on remplace l'ancien screenshot par le nouveau sinon on supprime le nouveau screenshot



/**
 * Fonction qui remplace l'ancienne capture par la nouvelle si un changement de pixels supérieur au seuil (50) est détecté, ou supprime la nouvelle capture dans le cas contraire. 
 * @param {number} id -ID du site en base de données  
 * @returns {number} ID du site si la différence en pixels est supérieur au seuil (50) sinon -1 (pas de modification)
 */

const compareScreenshot = async (id) => {
  const SEUIL = 50;
  let numDiffPixels = await detectChanges(
    `scShot/site_${id}.png`,
    `scShotTMP/site_${id}.png`
  );
  console.log('numDiffPixels', numDiffPixels);
  if (numDiffPixels > SEUIL) {
    fs.unlink(`scShot/site_${id}.png`, async () => {
      moveFile(`scShotTMP/site_${id}.png`, `scShot/site_${id}.png`);
    });
    return id;
  } else {
    fs.unlinkSync(`scShotTMP/site_${id}.png`);
    return -1;
  }
};
exports.detectChanges = detectChanges;
exports.compareScreenshot = compareScreenshot;
