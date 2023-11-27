import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";


const ResturantMenu = () =>{

    // const [resturantInfo, setresturantInfo] = useState(null);
    const {resId} = useParams();
    const resturantInfo =  useResturantMenu(resId);
    const [showIndex, setShowIndex] = useState();
    // console.log(resturantInfo)

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () =>{
    //     const data=await fetch(RESTURANT_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
    //     const json = await data.json();
    //     // console.log(json.data)
    //     //  const resturantName = json?.data?.cards[0]?.card?.card?.info?.name;
    //     // const itemCards =json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //     // console.log(itemCards)

    //     setresturantInfo(json.data);
    // }


    if(resturantInfo == null) return <Shimmer/>;

    let {name, cuisines, avgRatingString, areaName, costForTwoMessage, totalRatingsString} = resturantInfo?.cards[0]?.card?.card?.info;
    let {deliveryTime} = resturantInfo?.cards[0]?.card?.card?.info?.sla;

    // console.log(resturantInfo)
    

    // const {itemCards} = resturantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    //   console.log(resturantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card)

    let catogories = resturantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(catogories)


    return(
        

        <div className=" m-auto">


            
            <div className="text-center">
                <div className="rest-details">
                    <h3 className="text-2xl font-bold my-6">{name}</h3>
                </div>

                <div>
                    <p>{areaName +", "+ deliveryTime+"min"}</p>
                    <div className="text-green-500"><p>{totalRatingsString}</p></div>
                </div>
            </div>

            
            {catogories.map((catogory, index) => (<ResturantCategory 
                key={catogory?.card?.card?.title} 
                data={catogory?.card?.card}
                showItems={index==showIndex? true : false}
                setShowIndex={() => setShowIndex(index)}
                />))}


            

           

        </div>
    )
    
}


export default ResturantMenu;