import { CDN_URL } from "../utils/constants"; 

const ResturantCard = (props) =>{
    const {resData} = props
    const {name,cuisines,avgRating,sla,cloudinaryImageId} =resData?.info;
    // console.log(resData)
    return (
        <div className="resturant-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="resturant-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    )
};


export default ResturantCard;