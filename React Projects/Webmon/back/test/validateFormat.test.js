const format = require('../utils/validateFormat'); // La fonction renvoie une erreur si le format est incorrect et NULL sinon

var assert = require('chai').assert;

describe("ValidateFormat",() => {
  it("should return an error since args are invalid mails",() => {
   assert.isNotNull(format.validateFormatMail("mymailhotmail.com")); // il manque l'arobase
   assert.isNotNull(format.validateFormatMail("mymail@")) // il manque le nom de domaine
   assert.isNotNull(format.validateFormatMail("mymail@gmail")) // nom de domaine incomplet
   assert.isNotNull(format.validateFormatMail("mymail@gmail.")) // nom de domaine incomplet
   assert.isNotNull(format.validateFormatMail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@hhhhhhhhhh.aaaaaaaaaaaaaaa")); // trop de caractères
   assert.isNotNull(format.validateFormatMail("")); // Mail vide
  })
  
  it("should return an error since args are invalid passwords",() => {
    assert.isNotNull(format.validateFormatMail("pAssw4")); // 8 caractères minimum/trop court
    assert.isNotNull(format.validateFormatMail("")) // mot de passe vide
    assert.isNotNull(format.validateFormatMail("@ù&azerty")) // Caractères spéciaux non autorisés
    assert.isNotNull(format.validateFormatMail("pppppaaaaaaaaaaaaaaaaaassssssssssssssswwwwwwwwwwwwwwwwwwooooooooooooorrrrrrrrrdddd")); // trop long / 20 max
 
   })
  it("should return null since we give a valid password in args so the error should be null",() => {
    assert.equal(format.validateFormatPassword("12345678"),null);
    assert.equal(format.validateFormatPassword("aaaaA-4aaa"),null);
    assert.equal(format.validateFormatPassword("12345abc"),null);
    assert.equal(format.validateFormatPassword("12345abc_."),null);
  })
  it("should return null since we give a valid mail in args so the error should be null",() => {
    assert.equal(format.validateFormatMail("m.ail-4@hotmail.com"),null);
    assert.equal(format.validateFormatMail("mon.-5@gmail.com"),null);
    assert.equal(format.validateFormatMail("mailCorrect@yoyo.com"),null);
    assert.equal(format.validateFormatMail("nom.prenom@yoyo.com"),null);
    assert.equal(format.validateFormatMail("nom-_prenom@yoyo.com"),null);
  })
  
})
