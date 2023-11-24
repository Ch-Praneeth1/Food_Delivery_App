import { useState } from "react";
import MenuItems from "./MenuItems";



const ResturantCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)
    // const [showItems,setShowItems] = useState(false);

    const handleClick = () =>{
        // setShowItems(!showItems)
        setShowIndex();

    }

    return(
        <div>
            <div className="w-6/12 bg-blue-200 shadow-2xl mx-auto  p-4">
                <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>

                </div> 
                
                {showItems && <MenuItems items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default ResturantCategory;