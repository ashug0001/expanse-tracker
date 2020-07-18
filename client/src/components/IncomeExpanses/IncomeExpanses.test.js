import React from "react";
import { shallow } from "enzyme";

import IncomeExpanses from "./IncomeExpanses";

describe("IncomeExpanses", () => {
  it("should render IncomeExpanses", () => {
    const wrapper = shallow(<IncomeExpanses />);
  });

  it("should render initial layout", () => {
    const component = shallow(<IncomeExpanses title="Expanse Tracker" />);

    expect(component.getElement()).toMatchSnapshot();
  });
});
