import { render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("testing the contact page has rendered or not", ()=>{

    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("testing the button has there in contact page or not", ()=>{

    render(<Contact/>)

    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument();
});