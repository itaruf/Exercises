import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Register from "../register/Register";
import * as action from "../register/registerAction";
import {BrowserRouter as Router} from "react-router-dom";

jest.mock('../register/registerAction');
const wrapper = shallow(<Router><Register /></Router>);
describe("Testing action", () => {
  const onSave = jest.spyOn(action, "onSave");
  
 
  afterEach(() => {
    onSave.mockClear();
  });
  it("the function should be called", () => {
    wrapper.find("#bouton-inscription").simulate("click");
    expect(onSave).toHaveBeenCalledTimes(1);
    wrapper.find("#error").simulate("change",{target : {value : ""}})
  });
  it("Should call the function with good params", () => {
    
    var event = { target: { value: "password" } };
    wrapper.find("#passwordVerify").simulate("change", event);
    wrapper.find("#password").simulate("change", event);
    wrapper
      .find('input[type="mail"]')
      .simulate("change", { target: { value: "mailcorrect@hotmail.com" } });
    wrapper.find("#bouton-inscription").simulate("click");

    expect(onSave).toHaveBeenCalledWith(
      {
        error: expect.anything(),
        mail: "mailcorrect@hotmail.com",
        password: "password",
        passwordVerify: "password",
        redirect: false,
      },
      expect.anything()
    );
  });

 
});

describe("<Register/>", () => {
  // la constante wrapper recoit le composant
  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Register />, div);
  });

  it("should contain an email field", () => {
    expect(wrapper.find('input[type="mail"]').length).toEqual(1);
  });
  it("should contain 2 password fields", () => {
    expect(wrapper.find('input[type="password"]').length).toEqual(2);
  });

  // Si ces 3 tests passent => onChange est correct et le state stock bien la valeur de l'input
  it("should change the value of the input mail when onChange is trigered", () => {
    const event = { target: { value: "exemple@hotmail.com" } };
    wrapper.find('input[type="mail"]').simulate("change", event);
    wrapper.update();
    expect(wrapper.find('input[type="mail"]').props().value).toBe(
      "exemple@hotmail.com"
    );
    wrapper
      .find('input[type="mail"]')
      .simulate("change", { target: { value: "" } });
  });
  it("should change the value of the input password when onChange is trigered ", () => {
    const event = { target: { value: "mypassword" } };
    wrapper.find("#password").simulate("change", event);
    wrapper.update();
    expect(wrapper.find("#password").props().value).toBe("mypassword");
    wrapper.find("#password").simulate("change", { target: { value: "" } });
  });

  it("should change the value of the input password when onChange is trigered ", () => {
    var event = { target: { value: "mypassword2" } };
    wrapper.find("#passwordVerify").simulate("change", event);
    wrapper.update();
    expect(wrapper.find("#passwordVerify").props().value).toBe("mypassword2");
    wrapper
      .find("#passwordVerify")
      .simulate("change", { target: { value: "" } });
  });

  describe("Print errors and messages", () => {
    const errorInput1 = "Tous les champs doivent etre renseignés";
    const errorInput2 = "Le format du mail est incorrect";
    const errorInput3 = "Le format du mot de passe est incorrect";
    const errorInput4 = "Les mots de passes doivent être identiques ! ";

    it("should be undefined since we haven't clicked to the #bouton-inscription ", () => {
      expect(wrapper.find("#error")).toEqual({});
      expect(wrapper.find("#message")).toEqual({});
    });
    it("should print errorInput1 since only password is given ", () => {
      var event = { target: { value: "aValidPassword" } };
      wrapper.find("#password").simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      wrapper.update();
      
      expect(wrapper.find("#error").text()).toEqual(errorInput1);
      wrapper.find("#password").simulate("change", { target: { value: "" } });
    });
    it("should print errorInput1 since only passwordVerify is given ", () => {
      var event = { target: { value: "aValidPasswordVerify" } };
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput1);
      //Remet le input à son etat initial
      wrapper
        .find("#passwordVerify")
        .simulate("change", { target: { value: "" } });
    });

    it("should print errorInput1 since only mail and password are given ", () => {
      var event = { target: { value: "password" } };
      wrapper.find("#password").simulate("change", event);
      event = { target: { value: "exemple@hotmail.com" } };
      wrapper.find('input[type="mail"]').simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      console.log(wrapper.find("#error").text())
      expect(wrapper.find("#error").text()).toEqual(errorInput1);

      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "" } });
      wrapper.find("#password").simulate("change", { target: { value: "" } });
    });
    it("should print errorInput1 since only mail and passwordVerify are given ", () => {
      var event = { target: { value: "passwordVerify" } };
      wrapper.find("#passwordVerify").simulate("change", event);

      event = { target: { value: "exemple@hotmail.com" } };
      wrapper.find('input[type="mail"]').simulate("change", event);

      wrapper.find("#bouton-inscription").simulate("click");

      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput1);

      wrapper
        .find("#passwordVerify")
        .simulate("change", { target: { value: "" } });
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "" } });
    });
    it("should print errorInput1 since only password and passwordVerify are given ", () => {
      var event = { target: { value: "password" } };
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#password").simulate("change", event);

      wrapper.find("#bouton-inscription").simulate("click");

      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput1);

      wrapper.find("#password").simulate("change", { target: { value: "" } });
      wrapper
        .find("#passwordVerify")
        .simulate("change", { target: { value: "" } });
    });

    it("should print errorInput2 since we give mails that don't respect the format ", () => {
      var event = { target: { value: "password" } };
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#password").simulate("change", event);
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "mailNonValid" } });
      wrapper.find("#bouton-inscription").simulate("click");

      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput2);
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "mailNonValid@ho" } });
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput2);
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "mailNonValid@hotmail." } });
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput2);

      wrapper.find("#password").simulate("change", { target: { value: "" } });
      wrapper
        .find("#passwordVerify")
        .simulate("change", { target: { value: "" } });
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "" } });
    });
    it("should return errorInput3 since the given passwords don't respect the format", () => {
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "mailcorrect@hotmail.com" } });
      var event = { target: { value: "1234avc" } }; // trop court
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#password").simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput3);

      event = { target: { value: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzz" } }; // trop long
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#password").simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput3);

      event = { target: { value: "@^$szaokp" } }; // caracteres spéciaux non autorisé
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#password").simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput3);

      wrapper.find("#password").simulate("change", { target: { value: "" } });
      wrapper
        .find("#passwordVerify")
        .simulate("change", { target: { value: "" } });
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "" } });
    });
    it("should return errorInput4 since we don't give same passwords", () => {
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "mailcorrect@hotmail.com" } });
      var event = { target: { value: "password1" } };
      wrapper.find("#password").simulate("change", event);
      event = { target: { value: "password2" } };
      wrapper.find("#passwordVerify").simulate("change", event);
      wrapper.find("#bouton-inscription").simulate("click");
      expect(wrapper.find("#error").length).toBe(1);
      expect(wrapper.find("#error").text()).toEqual(errorInput4);
      wrapper.find("#password").simulate("change", { target: { value: "" } });
      wrapper
        .find("#passwordVerify")
        .simulate("change", { target: { value: "" } });
      wrapper
        .find('input[type="mail"]')
        .simulate("change", { target: { value: "" } });
    });
  });
});
