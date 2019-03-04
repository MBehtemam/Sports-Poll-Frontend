import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import BrandStyled from "./Brand.styled";

describe("Test suits for brand", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(<BrandStyled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should has correct style rules", () => {
    const tree = renderer.create(<BrandStyled />).toJSON();
    expect(tree).toHaveStyleRule("flex", "1");
  });
});
