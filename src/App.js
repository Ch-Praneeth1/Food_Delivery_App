import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import ResturantCard from "./components/ResturantCard";


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path : "/About",
                element : <About/>
            },
            {
                path : "/Contact",
                element : <Contact/>,
            },
            {
                path : "/Resturants/:resId",
                element : <ResturantMenu/>,
            },

        ],
        errorElement : <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);