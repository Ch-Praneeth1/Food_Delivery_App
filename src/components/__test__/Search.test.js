import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resturanetsData.json"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should render the body and check the search button render or not" , async () =>{
   await act(async()=> render(
        <BrowserRouter>
                <Body/>
        </BrowserRouter>
    ));
    
    const searchBtn = screen.getByRole("button", {name: "Search"})

    expect(searchBtn).toBeInTheDocument();
});

it("should render the body and check the search flow" , async () =>{
    await act(async()=> render(
        <BrowserRouter>
                <Body/>
        </BrowserRouter>
    ));
     
    const searchBtn = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchbox");

    fireEvent.change(searchInput, {target : {value: "ak"}})

    fireEvent.click(searchBtn)

    const noOfResturants = screen.getAllByTestId("rescard")

    expect(noOfResturants.length).toBe(2)
});



// it("should render the body and check the top rated resturants flow" , async () =>{
//     await act(async()=> render(
//         <BrowserRouter>
//                 <Body/>
//         </BrowserRouter>
//     ));
    
//     const Resturants = screen.getAllByTestId("rescard");

//     expect(Resturants.length).toBe(9);
    

//     const topRatedResturants = screen.getByRole("button", {name:"Top Rated Resturants"});

//     fireEvent.click(topRatedResturants);

//     const noOfResturants = screen.getAllByTestId("rescard");

//     expect(noOfResturants.length).toBe(9);
// });
