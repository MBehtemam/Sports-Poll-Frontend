import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";

import Container from "./Container.styled";

describe("Test suits for Container ", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should has correct style rule on props", () => {
    const tree = mount(<Container direction='row' />);
    expect(tree).toHaveStyleRule("flex-direction", "row");
  });
  it("should has correct style rule with props", () => {
    const tree = mount(<Container />);
    expect(tree).toHaveStyleRule("flex-direction", "column");
  });
});
