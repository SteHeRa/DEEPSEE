import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhotoPreview from "../PhotoPreviewComponent";

const photo = {
  URL:
    "https://res.cloudinary.com/da5khewdo/image/upload/v1601454400/irpdqrvb3rrirxshf4qq.png",
};

describe("PhotoPreviewComponent", () => {
  it("should render correctly", () => {
    const photoPreviewComponent = render(<PhotoPreview photo={photo} />);

    expect(photoPreviewComponent).toMatchSnapshot();
  });

  it("should call when clicked", () => {
    window.open = jest.fn();
    render(<PhotoPreview photo={photo} />);

    userEvent.click(screen.getByRole("img"));

    expect(window.open).toHaveBeenCalledTimes(1);
  });
});
