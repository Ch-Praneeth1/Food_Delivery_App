import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const MenuItems = ({items}) =>{

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        dispatch(addItems(item))
    }

    return(
        <div>
            {items.map((item)=> (<div key={item.card.info.id} className="p-2 m-2 border-b-2 border-white-400 text-left flex justify-between">
                <div data-testid="foodItems" className="w-9/12">
                    <div  className="py-2">
                        <spam >{item.card.info.name} - ₹{item.card.info.price/100}</spam>

                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                    <div className="w-3/12 ">
                        <div className="absolute ">
                            <button data-testid="addTestBtn" className="p-2 bg-white shadow-lg mx-10 my-16 rounded-xl" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} className="w-36 rounded-xl h-[108px]"></img>
                        
                    </div>
            </div>))}
        </div>
    )
}

export default MenuItems;