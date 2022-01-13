import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Calculator from "../components/Calculator";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";

describe("test components", () => {
  test("Calculator tests", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Home tests", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
