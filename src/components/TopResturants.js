import { useEffect, useState } from "react";


const TopResturants = () =>{
    
    const [topResturantList, setTopResturantsList] = useState([""]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch()
    }
};

export default TopResturants;