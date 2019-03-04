import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import AdminSection from "./AdminSection";

describe("Test suits for Admins section", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(<AdminSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should has correct styled rule", () => {
    const tree = renderer.create(<AdminSection />).toJSON();
    expect(tree).toHaveStyleRule("display", "flex");
  });
});
