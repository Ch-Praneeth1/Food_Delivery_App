import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";



const Body = () =>{
    const [restaurantList, setrestaurantList] = useState([]);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log("data loding");
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setrestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // console.log("1st render");


    return (
        <div className="body">
            <div className="body-container">
            <div className="resturant-filter">
                <button id="filter-btn" onClick={() =>{
                    filteredList=restaurantList.filter((res) => res.info.avgRating>4.0);
                    // {console.log(restaurantList)}
                    setrestaurantList(filteredList)
                }}>Top Rated Resturants</button>
            </div>


            <div className="search">
                <input type="text" id="search-input" placeholder="Search Resturant or Food.."></input>
            </div>

            <div className="search-button">
                <button type="button" onClick={() =>{
                    let input = document.getElementById("search-input").value;
                    // console.log(input);
                    var filteredList=[];
                    // console.log(restaurantList.length);
                    for(let i=0;i<restaurantList.length;i++){
                        // console.log(restaurantList[i].info.cuisines);
                        if((restaurantList[i].info.cuisines).includes(input)){
                            filteredList.push(restaurantList[i]);
                        }
                    };
                    // console.log(filteredList);
                    setrestaurantList(filteredList);
                }} >Search</button>
            </div>
            </div>

            <div className="resturant-container">


                {/* Resturant cards
                <ResturantCard 
                    ResturantName="Welcome hottel"
                    Cusinie="Biriyani, Chicken tikka"
                    resData={resList[0]}
                />
                <ResturantCard
                    resData={resList[1]}
                /> */}

                {
                   restaurantList.map((resturant) => <ResturantCard key={resturant.info.id} resData={resturant}/>)
                }


            </div>
        </div>
    )
};




export default Body;