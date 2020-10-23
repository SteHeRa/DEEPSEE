import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LogListItem from "../LogListItemComponent";

const mockDive = {
  diveSite: "Cauldron",
  country: "Indonesia",
  region: "Komodo",
  date: 727401600000,
  photos: [
    "https://res.cloudinary.com/da5khewdo/image/upload/v1601454400/irpdqrvb3rrirxshf4qq.png",
  ],
};

describe("LogListItem", () => {
  it("renders correctly", () => {
    const logListItem = render(<LogListItem dive={mockDive} />);

    expect(screen.getByText(mockDive.diveSite)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockDive.country} - ${mockDive.region}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Tue Jan 19 1993")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "log list item image" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "log list item image" }).src
    ).toEqual(mockDive.photos[0]);
    expect(logListItem).toMatchSnapshot();
  });

  it("calls openDetails on click", () => {
    const openDetails = jest.fn();

    render(<LogListItem dive={mockDive} openDetails={openDetails} />);
    userEvent.click(screen.getByRole("img", { name: "log list item image" }));
    expect(openDetails).toHaveBeenCalledTimes(1);
  });
});
