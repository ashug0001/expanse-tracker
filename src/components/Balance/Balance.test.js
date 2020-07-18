import React from "react";
import { shallow } from "enzyme";

import Balance from "./Balance";

describe("Balance", () => {
  it("should render Balance", () => {
    const wrapper = shallow(<Balance />);
  });

  it("should render initial layout", () => {
    const component = shallow(<Balance />);

    expect(component.getElement()).toMatchSnapshot();
  });
});
