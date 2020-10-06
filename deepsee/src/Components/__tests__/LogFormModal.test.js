import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LogFormModal from "../LogFormModal";

describe("LogFormModal", () => {
  it("should render correctly", () => {
    const logFormModal = render(<LogFormModal />);

    expect(logFormModal).toMatchSnapshot();
  });

  //TODO
  //ADD TEST FOR USER EVENT IN EACH TEXT BOX IN FORM
  //TODO
  //TEST FORM VALIDATION
  //TODO
  //ONSUBMIT GETS CALLED
  // it("should call handleSubmit when form is submitted", () => {
  //   const handleSubmit = jest.fn();

  //   render(<LogFormModal />);
  //   // userEvent.type(
  //   //   screen.getByRole("textbox", { name: "max depth input" }),
  //   //   "{enter}"
  //   // );
  //   // expect(handleSubmit).toHaveBeenCalledTimes(1);
  //   userEvent.click(screen.getByRole("button", { name: "submit button" }));
  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  // });
  //TODO
  //ONCHANGE GETS CALLED
  //TODO
  //MOCK APICLIENT AND TEST RESPONSES
  //REQUIRES CREATING TEST DATABASE,
  //CHANGING TO THAT DB WHEN IN TEST ENV,
  //AND QUERYING THE DATABASE
});
