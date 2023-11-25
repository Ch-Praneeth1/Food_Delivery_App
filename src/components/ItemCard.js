import { ITEM_URL } from "../utils/constants";



const ItemCard = (props) =>{
    const {itemData} = props
    // const {card} = itemData;
    // console.log(itemData)
    
    const { name, price, imageId, nextAvailableAtMessage} =itemData?.card?.info;
    const {vegClassifier}=itemData?.card?.info?.itemAttribute;
    // console.log(imageId)


    if(vegClassifier=="NONVEG"){
        return(
            <div className="item" style={{backgroundColor:"#f0f0f0"}}>
                <div className="item-details">
                    <img alt="non-veg"></img>
                    <h3>{name}</h3>
                    <p>{"₹"+price/100}</p>
                </div>


                <div className="item-images">
                    <div className="item-logo"><img src={ITEM_URL+imageId} alt="image"></img></div>
                    <div className="add-button"><button >Add </button></div>
                </div>

            </div>
        )
    }
    else{
        return (
            <div className="item" style={{backgroundColor:"#f0f0f0"}}>
                <div className="item-details">
                    <img alt="veg"></img>
                    <h3>{name}</h3>
                    <p>{"₹"+price/100}</p>
                </div>

                <div className="item-images">
                    <div className="item-logo"><img src={ITEM_URL+imageId} alt="image"></img></div>
                    <div className="add-button"><button >Add</button></div>
                </div>

            </div>
        )
    }
};


export default ItemCard;