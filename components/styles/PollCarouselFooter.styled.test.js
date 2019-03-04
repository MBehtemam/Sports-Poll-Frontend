import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import "jest-styled-components";
import PollCarouselFooter from "./PollCarouselFooter.styled";

describe("Test suits for PollCarouselFooter component", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(<PollCarouselFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should has correct rule for childeren", () => {
    const tree = mount(
      <PollCarouselFooter>
        <div>First</div>
        <div>Second</div>
      </PollCarouselFooter>
    );
    expect(tree.find("div")).toHaveLength(2);
  });
});
