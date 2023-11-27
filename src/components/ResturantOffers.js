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

        <div className=" overflow-hidden w-12/12 ">
            <h1 className="px-[95px] p-4 absolute font-bold text-3xl">Best offers for you</h1>

            <div className="flex  m-4 p-8 w-12/12">

                {
                    resturantOffers.map((offCard) => (
                        <OfferCard offerData={offCard}/>
                    ))
                }

            </div>

        </div>
    );
};

export default ResturantOffers;