import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import PassLost from "../login/PassLost";
import { BrowserRouter as Router } from "react-router-dom";

describe("<PassLost/>", () => {
  const wrapper = shallow(<PassLost />);
  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><PassLost /></Router>, div);
  });

  it("should contain an email field", () => {
    expect(wrapper.find('input[type="mail"]').length).toEqual(1);
  });

  it("should change the value of the input email when onChange is trigered", () => {
    const event = { target: { value: "exemple@hotmail.com" } };
    wrapper.find('input[type="mail"]').simulate("change", event);
    wrapper.update();
    expect(wrapper.find('input[type="mail"]').props().value).toBe(
      "exemple@hotmail.com"
    );
  });
});
