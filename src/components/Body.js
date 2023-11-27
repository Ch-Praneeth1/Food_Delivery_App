import ResturantCard  from "./ResturantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { WithFilteredResturantCard } from "./ResturantCard";


const Body = () =>{
    const [restaurantList, setrestaurantList] = useState([]);
    const [filterRestaurantList, setfilterRestaurantList] = useState([]);
    const [searchValue , setsearchValue] = useState([""]);
    const onlineStatus = useOnlineStatus();
    // const WithFilteredResturant=WithFilteredResturantCard(ResturantCard);

    // console.log(restaurantList)
    
    useEffect(() =>{
        fetchData();

    },[]);
    

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        // console.log("data loding");
        // console.log("data loding");
        // console.log(json);
        setrestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };



    if(onlineStatus == false){
        return(
            <h1>You are offline check your internet connection </h1>
        )
    }


    
    // console.log("1st render");

    // if(restaurantList.length === 0){                        conditional rendering 
    //     return <Shimmer/>;
    // };




    return restaurantList.length ===0 ? <Shimmer/> :(                         //conditonal rendering using terinary operator 
        <div>
            <div className="flex space-x-8 align-middle">
            <div className="resturant-filter">
                <button  data-testid="topRatedResturants" className="m-4 border  h-9" id="filter-btn" onClick={() =>{
                    filteredList=restaurantList.filter((res) => res.info.avgRating>4.0);
                    // {console.log(restaurantList)}
                    setfilterRestaurantList(filteredList)
                }}>Top Rated Resturants</button>
            </div>


            <div >
                <input data-testid="searchbox" type="text" className="m-4 h-9 mr-0" id="search-input" placeholder="Search Resturant or Food" value={searchValue} onChange={(e) =>{
                    setsearchValue(e.target.value)
                }}></input>
            </div>

            <div className="search-button">
                <button type="button" className="m-4 h-9 w-[60px] bg-green-300 rounded-md ml-0" onClick={() =>{
                    // let input = document.getElementById("search-input").value;
                    // console.log(input);
                    var filteredList=[];
                    // console.log(restaurantList.length);
                    for(let i=0;i<restaurantList.length;i++){
                        // console.log(restaurantList[i].info.cuisines);
                        if((restaurantList[i].info.name).toLowerCase().includes(searchValue.toLowerCase())){
                            filteredList.push(restaurantList[i]);
                        }
                    };
                    // console.log(filteredList);
                    setfilterRestaurantList(filteredList);
                }} >Search</button>
            </div>
            </div>

            <div className="flex flex-wrap justify-center">


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
                   filterRestaurantList.map((resturant)  =>(
                        <Link key={resturant.info.id} to={"/Resturants/"+resturant.info.id}>
                            <ResturantCard resData={resturant?.info} />
                        </Link>

                    ))
                }


            </div>
        </div>
    )
};




export default Body;