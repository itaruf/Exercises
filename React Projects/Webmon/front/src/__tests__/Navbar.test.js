import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Navbar />", () => {
  const wrapper = shallow(<Navbar />);

  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><Navbar /></Router>, div);
  });
  it("should include four links", () => {
    expect(wrapper.find("NavLink").length).toBe(3);
  });

  it("should contain a link to /register", () => {
    expect(wrapper.find("#linkToRegister").prop("to")).toBe("/register");
  });
  it("should contain a link to /login", () => {
    expect(wrapper.find("#linkToLogin").prop("to")).toBe("/login");
  });
});
