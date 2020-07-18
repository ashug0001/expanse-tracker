import React from "react";
import { shallow } from "enzyme";
import TransactionList from "./TransactionList";

describe("TransactionList", () => {
  it("should render TransactionList", () => {
    const wrapper = shallow(<TransactionList />);
  });

  it("should render initial layout", () => {
    const component = shallow(<TransactionList />);

    expect(component.getElement()).toMatchSnapshot();
  });
});
