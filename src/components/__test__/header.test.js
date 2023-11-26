import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should check weather the login button got rendered or not in header componenet", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});


it("should check weather the cart has 0 items while the header componenet rendered", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartValue = screen.getByText("Cart (0 Item)");

    expect(cartValue).toBeInTheDocument();
});


it("should check weather the click function is working on login button in header component", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginValue = screen.getByText("Login");

    fireEvent.click(loginValue);

    const logoutValue = screen.getByText("Logout");

    expect(logoutValue).toBeInTheDocument();
});