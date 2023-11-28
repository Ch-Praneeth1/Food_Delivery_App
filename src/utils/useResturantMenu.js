import { useEffect , useState } from "react";
import {RESTURANT_API} from "../utils/constants";

const  useResturantMenu = (resId) =>{

    const [resturantInfo, setresturantInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch(RESTURANT_API + resId);
        const json = await data.json();
        setresturantInfo(json.data);
    }

    return resturantInfo;
}

export default useResturantMenu;