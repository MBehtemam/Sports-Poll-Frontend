import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import "jest-styled-components";

import Picker from "./Picker";
const items = [
  { name: "name1", id: 1 },
  { name: "name2", id: 2 },
  { name: "name3", id: 3 }
];
describe("Test suits for Picker", () => {
  it("should match with snapshot", () => {
    const tree = renderer.create(
      <Picker items={items} keyValue='name' idValue='id' />
    );
    expect(tree).toMatchSnapshot();
  });
  it("should has correct children lenth", () => {
    const tree = shallow(<Picker items={items} keyValue='name' idValue='id' />);
  });
});
