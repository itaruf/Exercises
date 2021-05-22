const supertest = require("supertest");
const app = require("../server");
const db = require("../data/database");
var assert = require("chai").assert;
const jwt = require('jsonwebtoken');
const config = require("../config/secretjwt");


const user = {
  mail : "testMailConfirm@test.tst",
  password : "password",
  confirmed : false
}


before(  (done) => {
  // Crétion d'un user
  const reqDB = {
    text : "INSERT INTO USERS(mail,password,confirmed) VALUES ($1,$2,$3)",
    values : [user.mail,user.password,user.confirmed]
  }
  db.getDB().query(reqDB).then( () => done()).catch(err => done(err))
})


after( (done) => {
  // Supprime le user créé après que tous les tests ont été éxécutés
  const reqDB = {
    text : "DELETE FROM USERS WHERE MAIL = $1",
    values : [user.mail]
  }
  db.getDB().query(reqDB).then( () => done()).catch(err => done(err))
})

describe('mailConfirm',() => {
  
  it('should return status 401 since the token is invalid', done => {
    supertest(app)
    .get('/confirmation/abcdefgh123')
    .expect(401)
    .end(err => {
      if(err) throw err;
      done();
    })
  })

  it('should redirect the user with a 302 status since the token is valid', done =>{
    let token = jwt.sign(user.mail,config.secretMailToken);
    supertest(app)
    .get('/confirmation/' + token)
    .expect(302)
    .end(err =>{
      if (err) throw err;
      done()
    });
     
  })
  

})
