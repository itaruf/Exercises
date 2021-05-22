const puppeteer = require("puppeteer-extra");
const monit = require("../helpers/monitoring");
const dc = require("./compare");

// Source/Documentation : https://www.npmjs.com/package/puppeteer-extra-plugin-adblocker
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

/**
 * Fonction qui capture l'intégralité de la page d'un site lors de son premier ajout
 * @param {string} url - url de la page à capturer
 * @param {string} path - chemin où sauvegarder la capture
 * @returns {Promise<number>} Renvoie 1 si la capture a été correctement faite, 0 en cas d'erreur  
 */

// Prend un screenshot, renvoie 1 si le navigateur arrive à aller à l'url passer en parametre, 0 sinon

const screenshot = async (url, path) => {
  const promise = new Promise((resolve, reject) => {
    puppeteer.launch({ headless: true }).then(async (browser) => {
      const page = await browser.newPage();
      await page.setViewport({ width: 800, height: 600 });
      await page
        .goto(url, { waitUntil: "networkidle0", timeout: 0 })
        .then(async () => page.screenshot({ path: path, fullPage: true }).then( async () => await browser.close()))
        .then(() => resolve(1))
        .catch(() => reject(0))      
    });
  });
  // Renvoie le résultat de la promesse
  return await promise.then((res) => res).catch((err) => err);
};




/**
 * Fonction qui prend les captures d'écran et compare tous les sites monitorés par tous les utilisateurs
 * @returns {Array<number>} renvoie un tableau contenant l'id des sites ayant subi des modifications ou -1 
 pour les sites n'ayant pas subi de modification ou en cas d'erreur
 */
const takeAndCompareScreenshots = async () => {
  // Récupère  tous les sites de la table SITES
  const sites = await monit.getSITES();

  var promises = []; // Initialisation d'un tableau qui contiendra des promesses
  // Récupère une instance du navigateur
  const nav = puppeteer.launch({ headless: true });
  const browser = await nav.then((instanceBrowser) => instanceBrowser);

  // Pour tous les sites :
  for (var i = 0; i < sites.length; i++) {
    let { url, id } = sites[i]; // Récupere l'id et l'url du site

    // Création d'une promesse renvoyant l'id du site s'il a subi des modifications -1 sinon
    const promise = new Promise((resolve, reject) => {
      let page = browser.newPage(); // Ouvre une page dans le navigateur

      page
        .then(async (instancePage) => {
          await instancePage.setViewport({ width: 800, height: 600 });
          await instancePage.goto(url, {
            waitUntil: "networkidle0",
            timeout: 0,
          });

          return instancePage;
        })
        .then(async (instancePage) =>
          resolve(
            instancePage
              .screenshot({
                path: `ScshotTMP/site_${id}.png`,
                fullPage: true,
              })
              .then(async () => dc.compareScreenshot(id))
          )
        )
        .catch((err) => reject(err));
    });
    promises.push(promise);
  }

  /* Lorsque toutes promesses ont été résolu, on ferme le navigateur puis renvoie le tableau contenant :
    L'id du site s'il y a eu modification,
    -1 SINON (erreur ou pas de modification)
  */
  return await Promise.all(promises).then(async (arrayID) => {
    await browser.close();
    return arrayID;
  });
};

exports.takeAndCompareScreenshots = takeAndCompareScreenshots;
exports.screenshot = screenshot;
