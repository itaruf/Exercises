const supertest = require("supertest");
const app = require("../server");
const db = require("../data/database");
const hashPass = require("../helpers/password/hashPass");
var assert = require("chai").assert;

require("../data/database").initDB();

after((done) => {
  db.getDB().query("DELETE FROM USERS WHERE MAIL = 'fakeUser@fake.com'", () => {
    if (err) done(err)
    done();
  })
});

describe("/login", async () => {
  const errorInput1 = "Mail ou mot de passe incorrect";
  const errorInput2 =
    "Le mail n'est pas confirmé ! Un mail de confirmation vient d'etre envoyé à l'adresse :  fakeUser@fake.com";

  const fakeUser = {
    mail: "fakeUser@fake.com",
    password: "password",
    confirmed: false
  };
  it("should return errorInput1 since the user does not exist", done => {
    supertest(app)
      .post("/login")
      .send({
        mail: "userdoesnotexist@gmail.com",
        password: "password"
      })
      .expect(401, { error: errorInput1 })
      .end(err => {
        if (err) throw err;
        done();
      });
  });

  it("should return status 401 since the mail is not confirmed", async (done) => {
    let hash = await hashPass.hashPass(fakeUser.password);
    const reqDB = {
      text: "INSERT INTO USERS (mail,password,confirmed) VALUES ($1,$2,$3)",
      values: [fakeUser.mail, hash, fakeUser.confirmed]
    };
    db.getDB().query(reqDB, (err) => {
      if (err) done(err)

      supertest(app)
        .post("/login")
        .send({
          mail: fakeUser.mail,
          password: fakeUser.password
        })
        .expect(401, { error: errorInput2 })
        .end(err => {
          if (err) done(err)
          done()
        })
    })
  });

  it("should return status errorInput1 since the password is incorrect", done => {
    supertest(app)
      .post("/login")
      .send({
        mail: fakeUser.mail,
        password: "incorrectPassword"
      })
      .expect(401, { error: errorInput1 })
      .end(err => {
        if (err) throw err;
        done();
      });
  });
  it("should return status errorInput1 since the mail is incorrect", done => {
    supertest(app)
      .post("/login")
      .send({
        mail: "mailIncorrect@abc.com",
        password: fakeUser.password
      })
      .expect(401, { error: errorInput1 })
      .end(err => {
        if (err) throw err;
        done();
      });
  });
  // Met l'attribut confirmed du mail à true.
  describe("Login works", () => {
    before((done) => {
      db.getDB().query(
        "UPDATE USERS SET confirmed = true WHERE mail = 'fakeUser@fake.com'", (err) => {
          if (err) done(err)
          done();
        })
    })
    it("should return a 200 statusCode and a token since every thing is correct", done => {
      supertest(app)
        .post("/login")
        .send({
          mail: fakeUser.mail,
          password: fakeUser.password
        })
        .expect(200)
        .expect(res => {
          assert.isNotNull(res.body.token); // Vérifie que le token est non nul
          assert.isNotNull(res.body.message); // Verifie que le corp contient bien un message et non une erreur
        })
        .end(err => {
          if (err) throw err;
          done();
        });
    });
  });
});
