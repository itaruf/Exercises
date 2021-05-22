import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Faq from "../faq/Faq";
import {BrowserRouter as Router } from "react-router-dom"

describe("<Faq />", () => {
  const wrapper = shallow(<Faq />); // Pour les futurs tests
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( <Router><Faq /></Router>, div);
  });
});
