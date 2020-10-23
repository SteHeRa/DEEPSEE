import React from "react";
import { render, screen } from "@testing-library/react";

import LogListComponent from "../LogListComponent";

import mockLogData from "./__mocks__/MockLogData";

describe("LogListComponent", () => {
  it("renders correctly", () => {
    const logListComponent = render(<LogListComponent log={mockLogData} />);

    //The mock log data does not have unique country, region or diveSite properties for each item
    //so not testing against those
    for (let i = 0; i < mockLogData.length; i++) {
      expect(
        screen.getByText(new Date(mockLogData[i].date).toDateString())
      ).toBeInTheDocument();
      expect(
        screen.getAllByRole("img", { name: "log list item image" })[i].src
      ).toEqual(mockLogData[i].photos[0]);
    }

    expect(logListComponent).toMatchSnapshot();
  });
});
