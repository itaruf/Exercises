import format from "../utils/ValidateForm";

describe("class ValidateForm", () => {
  describe("Validate Mail ", () => {
    it("Should return false since mails given in args are incorrect", () => {
      expect(format.validateMail("exemple")).toBe(false); // Invalide
      expect(format.validateMail("exemple@")).toBe(false); // Incomplet
      expect(format.validateMail("exemple@hotmail")).toBe(false); // Incomplet
      expect(format.validateMail("exemple@hotmail.")); // Incomplet
      expect(
        format.validateMail(
          "eeeeeeeeeeeeeeeeeeeeee@hhhhhhhhhhhhhhhhhhoooooooooooooooootttttmail.com"
        )
      ); // Trop long
    });
    it("Should return true since mails given in args are CORRECT", () => {
      expect(format.validateMail("exemple@hotmail.com")).toBe(true); 
      expect(format.validateMail("exemple.ex@gmail.com")).toBe(true); // Autorise le .
      expect(format.validateMail("exemple_ex@yopmail.com")).toBe(true); // Autorise le _
      expect(format.validateMail("exem-ple@hotmail.com")).toBe(true); // Autorise le -
    });
  })
  describe("Validate Password", () => {
    it("Should return false since passwords given in args are incorrect", () => {
      expect(format.validatePassword("pass123")).toBe(false) // Trop Court
      expect(format.validatePassword("$$@azaert")).toBe(false) // Caracteres spéciaux non autorisés
      expect(format.validatePassword("passssssssssssssssssssssssssssssswwwwwwwwwwooooooooooordddddddddddd")).toBe(false) // Trop long
    });
    it("Should return true since passwords given in args are correct",() => {
      expect(format.validatePassword("validPassword")).toBe(true);
      expect(format.validatePassword("valid1234")).toBe(true);
      expect(format.validatePassword("aAa123--")).toBe(true);
      expect(format.validatePassword("my_password-123")).toBe(true);
    })
  })
  


});
