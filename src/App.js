import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import ResturantCard from "./components/ResturantCard";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const AppLayout = () =>{

    const [userName, setUserName] = useState("nan");

    useEffect(()=>{
        //fetch the data for now we use constant data
        const data={
            uName : "Praneeth Reddy"
        }

        setUserName(data.uName)
    },[]);


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{userLogedIn : userName}}>
                <div className="app">
                    <UserContext.Provider value={{userLogedIn : "Anu Reddy"}}>
                        <Header/>
                    </UserContext.Provider>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
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
            {
                path : "/Cart",
                element : <Cart/>,
            },

        ],
        errorElement : <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);