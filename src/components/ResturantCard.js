import { useContext } from "react";
import { CDN_URL } from "../utils/constants"; 
import UserContext from "../utils/UserContext";


const ResturantCard = (props) =>{
    const {resData} = props
    
    const {name,cuisines,avgRating,sla,cloudinaryImageId} =resData;
    // const {userLogedIn} = useContext(UserContext);
    // console.log(resData)
    return (
        <div data-testid="rescard" className="m-4 w-[250px] p-3 h-[310px] bg-white hover:shadow-xl">
            
            <div>
                <img className="rounded-lg h-[150px] w-[100%]" src={CDN_URL+cloudinaryImageId}></img>
            </div>

            <div className=" mx-5">
                <h3 className="font-extrabold" style={{textDecoration: 'none'}}>{name}</h3>
                <p className="overflow-hidden font-light">{cuisines[0]+","+cuisines[1]+","+cuisines[2]}</p>
                <h4 className="text-green-500 font-semibold">{avgRating} Stars</h4>
                <h4 className="font-medium">{sla.deliveryTime}mins</h4>
            </div>
            {/* <h4 className="font-bold">{userLogedIn}</h4> */}
        </div>
    )
};


export const WithFilteredResturantCard =(ResturantCard) =>{
    return (props)=>{
        return (
            <div>
                <label>Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;