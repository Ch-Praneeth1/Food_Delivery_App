import { useEffect, useState } from "react";
import DishCard from "./DishCard";


const Dishes = () =>{
    const [dishCards, setDishCards] = useState([]);
    // console.log(dishCards);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setDishCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    }

    if(dishCards.length !=0){
        return(
            <div>
                <h1 className=" px-[95px] p-4 absolute font-bold text-3xl ">What's on your mind?</h1>
                <div className="flex flex-shrink-0 m-4 p-16 pb-3 border-b-2">
                {dishCards.map((dishCard)=>(
                    <DishCard key={dishCard?.card?.id} card={dishCard}/>
                ))}
                </div>
            </div>
        );
    };
};

export default Dishes;