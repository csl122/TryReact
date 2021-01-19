import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";

test("it works", () => {
    const { getByText, getByLabelText } = render(<App />);

    getByText("TODOS");
    getByLabelText("What needs to be done?");
    getByText("Add #1");
});

// fireEvent
test("allows users to add items to their list", () => {
    const { getByText, getByLabelText } = render(<App />);

    const input = getByLabelText("What needs to be done?");
    const button = getByText("Add #1");

    // Simulate user events
    fireEvent.change(input, { target: { value: "Learn spanish" } });
    fireEvent.click(button);

    // Make assertion
    getByText("Learn spanish");
    getByText("Add #2");
});

// userEvent
test("user-events allows users to add...", () => {
    const { getByText, getByLabelText } = render(<App />);

    const input = getByLabelText("What needs to be done?");
    const button = getByText("Add #1");

    userEvent.type(input, "Learn spanish");
    userEvent.click(button);

    getByText("Learn spanish");
    getByText("Add #2");
});
