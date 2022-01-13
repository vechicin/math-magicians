import React from "react";
import { render, screen } from '@testing-library/react';
import Calculator from "../components/Calculator";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";

describe("test components", () => {
  test("Calculator tests", () => {
    render(<Calculator />)
    screen.getByText('AC')
  });
  it("Home tests", () => {
    render(<Home />)
    screen.getByText('Welcome')
  })
});
