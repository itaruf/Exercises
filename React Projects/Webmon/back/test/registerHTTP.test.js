// const supertest = require("supertest");
// const app = require("../server");
// const db = require("../data/database");
// var assert = require("chai").assert;

// // model de test inspiré du site https://medium.com/@ehtemam/writing-test-with-supertest-and-mocha-for-expressjs-routes-555d2910d2c2

// after( (done) => {
//   db.getDB().query("DELETE FROM USERS WHERE MAIL = 'fakeRegister@fake.fak'").then( () => done()).catch(err => done(err))// Supprime l'utilisateur apres avoir terminé les tests
// })

// describe("POST /register", () => {
//   describe("Control that the data is complete", () => {
//     /* ALL CASES THAT SHOULD RETURN THIS ERROR : 
//     Mail
//     Password 
//     PasswordVerify 
//     Mail Password 
//     Mail PasswordVerify 
//     Password PasswordVerify
// */
//     const errorInput1 = "Tous les champs doivent être renseignés";
//     it("should return a 400 status BAD Request with error because of missing password and passwordVerify", done => {
//       supertest(app)
//         .post("/register")
//         .send({ mail: "fakeRegister@fake.fak" })
//         .expect(400, {
//           error: errorInput1
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return a 400 status BAD Request with error because of missing mail and passwordVerify", done => {
//       supertest(app)
//         .post("/register")
//         .send({ password: "password" })
//         .expect(400, {
//           error: errorInput1
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return a 400 status BAD Request with error because of missing mail and password", done => {
//       supertest(app)
//         .post("/register")
//         .send({ passwordVerify: "password" })
//         .expect(400, {
//           error: errorInput1
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });

//     it("should return a 400 status BAD Request with error because of missing passwordVerify", done => {
//       supertest(app)
//         .post("/register")
//         .send({ mail: "fakeRegister@fake.fak", password: "password" })
//         .expect(400, {
//           error: errorInput1
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });

//     it("should return a 400 status BAD Request with error because of missing password", done => {
//       supertest(app)
//         .post("/register")
//         .send({ mail: "fakeRegister@fake.fak", passwordVerify: "password" })
//         .expect(400, {
//           error: errorInput1
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });

//     it("should return a 400 status BAD Request with error because of missing mail", done => {
//       supertest(app)
//         .post("/register")
//         .send({ password: "password", passwordVerify: "password" })
//         .expect(400, {
//           error: errorInput1
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//   });
//   describe("Control the mail format", () => {
//     const errorFormatMail = "Le format du mail est incorrect !";
//     it("should return an error with 400 status since 'exemple' is not a correct format ", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple", // Mail incomplet
//           password: "password",
//           passwordVerify: "password"
//         })
//         .expect(400, {
//           error: errorFormatMail
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return an error with 400 status since 'exemple@' is not a correct format ", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple@", // Incomplet
//           password: "password",
//           passwordVerify: "password"
//         })
//         .expect(400, {
//           error: errorFormatMail
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return an error with 400 status since 'exemple@hotmail' is not a correct format ", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple@hotmail", // Nom de domaine incomplet
//           password: "password",
//           passwordVerify: "password"
//         })
//         .expect(400, {
//           error: errorFormatMail
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return an error with 400 status since 'exemple@hotmail.' is not a correct format ", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple@hotmail.", // Nom de domaine incomplet
//           password: "password",
//           passwordVerify: "password"
//         })
//         .expect(400, {
//           error: errorFormatMail
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//   });
//   describe("Control passwords field", () => {
//     const errorFormatPassword = "Le format du mot de passe est incorrect !";
//     const errorSamePassword = "Les mots de passe doivent être identiques !";
//     it("should return an error since '1234567' has only 7 characteres", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple@hotmail.com",
//           password: "1234567", // Mot de passe trop court
//           passwordVerify: "1234567"
//         })
//         .expect(400, {
//           error: errorFormatPassword
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return an error since special charactere are forbidden", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple@hotmail.com",
//           password: "123456@&^%", // Caracteres spéciaux non autorisés
//           passwordVerify: "123456@&^%"
//         })
//         .expect(400, {
//           error: errorFormatPassword
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//     it("should return an error since the two password's input aren't equals", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "exemple@hotmail.com",
//           password: "password1",
//           passwordVerify: "password2"
//         })
//         .expect(400, {
//           error: errorSamePassword
//         })
//         .end(err => {
//           if (err) done(err);
//           done();
//         });
//     });
//   });
//   describe("Register works correctly ", () => {
//     it("should return 200 since everything is correct", done => {
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "fakeRegister@fake.fak",
//           password: "password1",
//           passwordVerify: "password1"
//         })
//         .expect(200,{message: "L'inscription a été prise en compte"})
//         .end(err => {
//           if (err) throw err ;
//           done();
//         });
//     });
//     it("should be added to the database", done => {
//       db.getDB().query(
//         "SELECT * FROM USERS WHERE MAIL = 'fakeRegister@fake.fak'",
//         (err, res) => {
//           if (err) done(err);
//           assert.strictEqual(res.rowCount, 1); // Vérifie qu'il existe bien un utilisateur avec ce mail dans la BDD
//           done();
//         }
//       );
//     });
//     it("can't sign on twice", done => {
//       let error = "Vous etes deja inscrit sur notre site !";
//       supertest(app)
//         .post("/register")
//         .send({
//           mail: "fakeRegister@fake.fak",
//           password: "password1",
//           passwordVerify: "password1"
//         })
//         .expect(400, {
//           error: error
//         })
//         .end(err => {
//           if (err) throw err;
//           done();
//         });
//     });
//   });

//   // Supprime le user pour que le test refonctionne lors de la relance
// });
