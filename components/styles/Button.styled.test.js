import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";
import ButtonStyled from "./Button.styled";

describe("Test suits for button.styled", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(<ButtonStyled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should has correct color for red button", () => {
    const tree = mount(<ButtonStyled color='red' />);
    expect(tree).toHaveStyleRule("color", "white");
  });
  it("should has correct color none button", () => {
    const tree = mount(<ButtonStyled />);
    expect(tree).toHaveStyleRule("color", "black");
  });
});
