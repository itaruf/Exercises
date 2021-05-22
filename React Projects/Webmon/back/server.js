const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors"); // authorize all cors
const register = require("./controllers/register");
const login = require("./controllers/login");
const middleware = require("./helpers/token");
const monitoring = require("./main/handleMonitoring");
const mail = require("./controllers/ValidateMail");
const userInfo = require("./controllers/getMail");
const del = require("./controllers/deleteAccount");
const webmon = require("./main/app");
const setPassword = require("./controllers/passlost");
const print = require("./controllers/printScreenshot");


require("./data/database").initDB();
var CronJob = require('cron').CronJob;
 var job = new CronJob(' */15 * * * *', function() {
 webmon.application();
}, null, true, 'Europe/Paris');
 job.start();

// Lance la fonction toute les 15 minutes

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

//  Inscription
app.get("/site/:siteID/:token", (req, res) => {
  const siteID = req.params.siteID;
  const token = req.params.token;
  print.printScreenshot(siteID, token, __dirname, res);
});

app.post("/register", (req, res) => {
  const userInfo = req.body;
  register.addUser(userInfo, res);
});

//  Vérification du mail
app.get("/confirmation/:token", (req, res) => {
  const tokenURL = req.params.token;
  mail.mailConfirm(tokenURL, res);
});

//  Connexion
app.post("/login", (req, res) => {
  const userInfo = req.body;
  login.authUser(userInfo, res);
});

//  Récupérer les pages monitorées
app.get("/monitoredPages", middleware.authenticateToken, (req, res) => {
  const userID = req.user.id;
  monitoring.getMonitoredPages(userID, res);
});

//  Ajouter une page à monitorer
app.post("/add", middleware.authenticateToken, (req, res) => {
  const userID = req.user.id;
  const userAddURL = req.body.url;
  monitoring.addMonitoredPage(userID, userAddURL, res);
});

//  Supprimer une page monitoré
app.delete("/delete/:siteID", middleware.authenticateToken, (req, res) => {
  const userID = req.user.id;
  const userDeleteURL = req.params.siteID;
  monitoring.deleteMonitoredPages(userID, userDeleteURL, res);
});

//  Supprimer son compte
app.delete("/deleteAccount", middleware.authenticateToken, async (req, res) => {
  const userID = req.user.id;
  del.deleteAccount(userID, res);
});

//  Récupérer le mail de l'utilisateur courant grâce à son token
app.get("/getmail", middleware.authenticateToken, (req, res) => {
  const userID = req.user.id;
  userInfo.getMail(userID, res);
});

//  Vérifie les données et envoie un mail de réinitialisation de mot de passe
app.post("/passlost", (req, res) => {
  const userMail = req.body.mail;
  setPassword.passLost(userMail, res);
});

//  Le lien du mail renvoie sur cette route qui récupère le token et le vérifie
app.get("/passlost/confirm/:token", (req, res) => {
  const tokenURL = req.params.token;
  setPassword.checkLink(tokenURL, res);
});

// Recoit le nouveau mot de passe , le contrôle et l'ajoute à la BDD
app.put("/changePassword", (req, res) => {
  setPassword.changePassword(req.body.token, req.body, res);
});


app.listen(8080, () => {
  console.log("Listening to port 8080");
});

module.exports = app;
