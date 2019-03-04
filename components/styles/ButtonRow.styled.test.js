import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";
import ButtonRowStyled from "./ButtonRow.styled";

describe("Test suits for Button row", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(<ButtonRowStyled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
