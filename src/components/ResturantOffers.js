import { useState , useEffect } from "react";
import OfferCard from "./OfferCard";

const ResturantOffers = () =>{
    const [resturantOffers, setResturantOffers] = useState([]);
    // console.log(resturantOffers)

    useEffect(() =>{
        fetchData();

    },[]);

    const fetchData = async () =>{

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResturantOffers(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    
    };


    return(

        <div>
            <h1 className=" px-[95px] p-4 absolute font-bold text-3xl ">Best offers for you</h1>

            <div className="flex flex-shrink-0 m-4 p-16 pb-3 border-b-2">

                {
                    resturantOffers.map((offCard) => ( 
                        <OfferCard key={offCard.id} offerData={offCard}/>
                    ))
                }

            </div>

        </div>
    );
};

export default ResturantOffers;