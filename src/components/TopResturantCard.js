import { TOP_RES_IMG_URL } from "../utils/constants";

const TopResturantCard = (props) => {
    
    const name = props?.data?.info?.name;
    const deliveryTime = props?.data?.info?.sla?.deliveryTime;
    const imgId = props?.data?.info?.cloudinaryImageId;
    const totalRatingsString = props?.data?.info?.totalRatingsString;
    // const cuisines = props?.data?.info?.cuisines;
    const areaName = props?.data?.info?.areaName;
    const header = props?.data?.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = props?.data?.info?.aggregatedDiscountInfoV3?.subHeader;
    console.log(props)

    return(
        <div className="m-8 w-[274px] cursor-pointer  hover:shadow-xl">
            <img className="w-[273px] h-[182px] rounded-2xl " src={TOP_RES_IMG_URL+imgId}></img>
            
            <h1 className="-mt-10 pl-4 text-xl font-extrabold text-white">{header + subHeader}</h1>
            
            <div className="my-5 mx-5">
                <h1 className="font-extrabold">{name}</h1>
                <h3 className="font-light">{deliveryTime} mins away</h3>
                <h3 className="text-green-500 font-semibold">{totalRatingsString} ratings</h3>
                {/* <p className="overflow-hidden">{cuisines.join(",")}</p> */}
                <h3 className="font-medium">{areaName}</h3>
            </div>
        </div>
    )
};

export default TopResturantCard;