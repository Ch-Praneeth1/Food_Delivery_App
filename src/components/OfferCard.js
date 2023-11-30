import { OFFER_URL } from "../utils/constants"; 

const OfferCard = (props) =>{

    // console.log(props)

    const {offerData} = props;

    // console.log(offerData);
    const {imageId} = offerData;
    // console.log(imageId)

    return(
        <div className=" mx-4  w-[425px] cursor-pointer">
        <img src={OFFER_URL+imageId}></img>
        </div>
    )
};

export default OfferCard;