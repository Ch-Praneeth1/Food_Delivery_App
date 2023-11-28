import {DISHES_URL} from "../utils/constants";


const DishCard = (props) =>{

    const {imageId} = props?.card;
    // console.log(imageId);
    // const {text} = props?.card?.action;
    // console.log(DISHES_URL)

    return(
        <div className="w-[144px] h-[180] cursor-pointer mx-4">
             <img src={DISHES_URL+imageId}></img>
        </div>
    );
};

export default DishCard;