const supertest = require("supertest");
const app = require("../server");
const jwt = require('jsonwebtoken');
const db = require("../data/database");
const config = require("../config/secretjwt");

const user = {
  mail : "testMailaddMonit@test.tst",
  password : "password",
  confirmed : true,
  id : 9999
}

before(  (done) => {
  // Crétion d'un user
  const reqDB = {
    text : "INSERT INTO USERS(mail,password,confirmed,id) VALUES ($1,$2,$3,$4)",
    values : [user.mail,user.password,user.confirmed,user.id]
  }
   db.getDB().query(reqDB).then( () => done()).catch(err => done(err))
  
})

after( (done) => {
  // Supprime le user créé après que tous les tests ont été éxécutés
  const reqDB = {
    text : "DELETE FROM USERS WHERE id = $1",
    values : [user.id]
  }
  db.getDB().query(reqDB).then( () => done()).catch(err => done(err))
})

describe('addMonitoredPages', () => {
  const validToken = jwt.sign({id : user.id},config.secret);
  it("Shoud", done => {
    supertest(app)
      .post("/add")
      .set({Accept: 'application/json', "Content-Type" : "application/json",Authorization : "Bearer " + validToken})
      .send({
        url : "https://www.eztrljznt/"
      })
      .expect(200)
      .end(err => {
        if (err) throw err;
        done();
      });
  })
})