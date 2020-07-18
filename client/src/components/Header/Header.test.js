import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  it("should render Header", () => {
    const wrapper = shallow(<Header title="Expanse Tracker" />);
  });

  it("should render initial layout", () => {
    const header = shallow(<Header title="Expanse Tracker" />);

    expect(header.getElement()).toMatchSnapshot();
  });
});
