import { CDN_URL } from "../utils/constants"; 

const ResturantCard = (props) =>{
    const {resData} = props
    const {name,cuisines,avgRating,sla,cloudinaryImageId} =resData?.info;
    // console.log(resData)
    return (
        <div className="m-4 w-[250px] p-3 h-[350px] bg-blue-100 rounded-lg hover:bg-blue-200">
            <img 
            className="rounded-lg h-[150px] w-[100%]" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold" style={{textDecoration: 'none'}}>{name}</h3>
            <p className="overflow-hidden">{cuisines.join(",")}</p>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    )
};


export default ResturantCard;