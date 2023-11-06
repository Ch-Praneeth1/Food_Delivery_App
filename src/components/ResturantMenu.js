import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {RESTURANT_API} from "../utils/constants";
import ItemCard from "./ItemCard";

const ResturantMenu = () =>{

    const [resturantInfo, setresturantInfo] = useState(null);
    const {resId} = useParams();
    // console.log(resId)


    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data=await fetch(RESTURANT_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json.data)
        //  const resturantName = json?.data?.cards[0]?.card?.card?.info?.name;
        // const itemCards =json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // console.log(itemCards)

        setresturantInfo(json.data);
    }

    if(resturantInfo === null){
        return <Shimmer/>
    };

    const {name, cuisines, avgRatingString, areaName, costForTwoMessage, totalRatingsString} = resturantInfo?.cards[0]?.card?.card?.info;
    const {deliveryTime} = resturantInfo?.cards[0]?.card?.card?.info?.sla;
    // console.log(resturantInfo?.cards[0]?.card?.card?.info)
    // console.log(resturantInfo)
    const {itemCards} = resturantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)


    return(


        <div className="menu-container">


            <div className="menu">
                <div className="menu-header">
                    <div className="rest-details">
                        <h3>{name}</h3>
                        <p>{cuisines.join(",")}</p>
                        <p>{areaName +", "+ deliveryTime+"min"}</p>
                    </div>


                    <div className="rating-container">
                        <div className="rating">
                            <div><i class="fa-solid fa-star"></i></div>
                            <div><h5>{avgRatingString}</h5></div>
                        </div>
                        <div><p>{totalRatingsString}</p></div>
                    </div>

                </div>
            </div>


            <div className="cost-for-two">
                <div><h4>{costForTwoMessage}</h4></div>
            </div>


            <div className="item-container">
                <div className="item-list">
    
                    <h2>Menu</h2>


                    {
                        itemCards.map(
                            (item) =>  <ItemCard key={item.card.info.id} itemData={item}/>
                        )
                    }

                        {/* {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
                        {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.price/100}</li>)} */}


                </div>
            </div>

        </div>
    )
}


export default ResturantMenu;