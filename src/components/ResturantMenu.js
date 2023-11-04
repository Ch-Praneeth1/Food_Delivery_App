import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {RESTURANT_API} from "../utils/constants";

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
        console.log(json.data)
        // const resturantName = json?.data?.cards[0]?.card?.card?.info?.name;
        // const itemCards =json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // console.log(itemCards)

        setresturantInfo(json.data);
    }

    if(resturantInfo === null){
        return <Shimmer/>
    };

    const {name, cuisines, avgRatingString, areaName, costForTwoMessage} = resturantInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resturantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)


    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <h3>{areaName}</h3>
            <h5>{avgRatingString}</h5>
            <ul>
                <h2>Menu</h2>
                {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} -Rs {item?.card?.info?.price/100}</li>)}
            </ul>
        </div>
    )
}


export default ResturantMenu;