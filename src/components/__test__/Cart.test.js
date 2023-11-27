import { fireEvent, render, screen } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import MOCK_DATA from "../mocks/resturantMenu.json";
import {act} from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("should check weather the cart function is working correctly or not", async() =>{

    await act(async ()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <ResturantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ))

    const acordianHeader = screen.getByText("Combos (15)");

    fireEvent.click(acordianHeader);

    expect(screen.getByText("Veg Biryani - ₹250")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(15);

    const addBtns = screen.getAllByTestId("addTestBtn");

    // expect(screen.getAllByText("Add +")).toBeInTheDocument()
    expect(addBtns.length).toBe(15);

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 Item)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 Item)")).toBeInTheDocument();


        //after rendering the cart comonent 

    expect(screen.getAllByTestId("foodItems").length).toBe(17);         //17 items should be there because we added the same items to the cart
    

    const clearBtn = screen.getByRole("button", {name: "Clear cart"});

    fireEvent.click(clearBtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(15);               // items will be 15 as we cleared the cart 


    expect(screen.getByText("add an item to buy")).toBeInTheDocument();
});