import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Login from "../login/Login";
import { BrowserRouter as Router } from "react-router-dom";

// Les tests ont été réalisé à l'aide de la documentation sur le site https://airbnb.io/enzyme/docs/api/


describe("<Login/>", () => {
  const wrapper = shallow(<Login />);
  afterEach(() => {
    wrapper.find('input[type="password"]').simulate("change", { target: { value: "" } });
    wrapper.find('input[type="mail"]').simulate("change", { target: { value: "" } });
  })
  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><Login /></Router>, div);
  });

  it("should contain an email field", () => {
    expect(wrapper.find('input[type="mail"]').length).toEqual(1);
  });
  it("should contain a password field", () => {
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
  });

  it("should include two links", () => {
    expect(wrapper.find("Link").length).toEqual(2);
  });
  it("should have a Link to the Register component", () => {
    expect(wrapper.find("#linkToRegister").prop("to")).toBe("/register");
  });
  it("should have a Link to the PassLost component", () => {
    expect(wrapper.find("#linkToPassLost").prop("to")).toBe("/passlost");
  });
  // Si ces 2 tests passent => onChange est correct et le state stock bien la valeur de l'input
  it("should change the value of the input email when onChange is trigered", () => {
    const event = { target: { value: "exemple@hotmail.com" } };
    wrapper.find('input[type="mail"]').simulate("change", event);
    wrapper.update();
    expect(wrapper.find('input[type="mail"]').props().value).toBe(
      "exemple@hotmail.com"
    );
  });

  it("should change the value of the input password when onChange is trigered ", () => {
    const event = { target: { value: "mypassword" } };
    wrapper.find('input[type="password"]').simulate("change", event);
    wrapper.update();
    expect(wrapper.find('input[type="password"]').props().value).toBe(
      "mypassword"
    );

  });

  describe("Message and Errors", () => {
    const errorInput1 = "Tous les champs doivent etre renseignés";
    const errorInput2 = "Le format du mail est incorrect";
    const errorInput3 = "Le format du mot de passe est incorrect";

    it("should be undefined since we haven't clicked to the #bouton-login ", () => {
      expect(wrapper.find("#errorLogin")).toEqual({}); // Vérifie que qu'il n'y a pas d"erreur à l'affichage de la page
    });
    it("should print errorInput1 since only mail is given", () => {
      var event = { target: { value: "mail@hotmail.com" } };
      wrapper.find('input[type="mail"]').simulate("change", event);
      wrapper.find("#bouton-login").simulate("click");

      expect(wrapper.find('#errorLogin').length).toEqual(1);
      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput1);

    })
    it("should print errorInput1 since only password is given", () => {
      var event = { target: { value: "password" } };
      wrapper.find('input[type="password"]').simulate("change", event);
      wrapper.find("#bouton-login").simulate("click");

      expect(wrapper.find('#errorLogin').length).toEqual(1);
      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput1);

    })

    it("should print errorInput2 since the mail don't respect the format", () => {
      var event = { target: { value: "password" } };
      wrapper.find('input[type="password"]').simulate("change", event);

      wrapper.find("input[type='mail']").simulate("change", { target: { value: "mailIncomplet" } }); // Mail incomplet
      wrapper.find("#bouton-login").simulate("click");

      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput2);

      wrapper.find("input[type='mail']").simulate("change", { target: { value: "mailIncomplet@" } }); //  Nom de domaine non renseigné
      wrapper.find("#bouton-login").simulate("click");
      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput2);

      wrapper.find("input[type='mail']").simulate("change", { target: { value: "mailIncomplet@hotmail." } }); //  Nom de domaine incomplet
      wrapper.find("#bouton-login").simulate("click");
      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput2);

      wrapper.find("input[type='mail']").simulate("change", { target: { value: "mailTTTTRRRRRROOOOOPPPlonggggggggggggggggg@hotmail.com" } });
      wrapper.find("#bouton-login").simulate("click");
      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput2);

      wrapper.find("input[type='mail']").simulate("change", { target: { value: "mail%$^p@hotmail.com" } }); // caractere spéciaux non autorisé
      wrapper.find("#bouton-login").simulate("click");
      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput2);

    })
    it("should print errorInput3 since the password don't respect the format", () => {
      wrapper.find("input[type='mail']").simulate("change", { target: { value: "mailCorrect@hotmail.com" } }); // Mail incomplet
      var event = { target: { value: "pass123" } }; // Trop court (8 caracteres minimum)
      wrapper.find('input[type="password"]').simulate("change", event);


      wrapper.find("#bouton-login").simulate("click");

      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput3);


      event = { target: { value: "pass123aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" } }; // Trop long (20 caracteres maximum)
      wrapper.find('input[type="password"]').simulate("change", event);

      wrapper.find("#bouton-login").simulate("click");

      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput3)

      event = { target: { value: "p$ssw@rd*" } }; // caracteres spéciaux non autorisés
      wrapper.find('input[type="password"]').simulate("change", event);


      wrapper.find("#bouton-login").simulate("click");

      expect(wrapper.find('#errorLogin').text()).toEqual(errorInput3);

    })

  })
});
