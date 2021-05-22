import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import { Route } from "react-router-dom";
import Login from "../login/login";
import Register from "../register/register";
import Faq from "../faq/faq";
import Home from "../page/home";
import PassLost from "../login/passLost";

let pathMap = {};
describe("routes using array of routers", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  it("should show Home component for /home router", () => {
    expect(pathMap["/home"]).toBe(Home);
  });
  it("should show Register component  for /register router", () => {
    expect(pathMap["/register"]).toBe(Register);
  });
  it("should show Faq component for /faq router", () => {
    expect(pathMap["/faq"]).toBe(Faq);
  });
  it("should show Login component for /login router", () => {
    expect(pathMap["/login"]).toBe(Login);
  });
  it("should show PassLost for /passlost router", () => {
    expect(pathMap["/passlost"]).toBe(PassLost);
  });
});

/* Code récupéré sur  https://techdoma.in/article/how-to-test-routes-react-router-dom-in-react-using-jest-1/  puis adapté à notre situation */
