import { useEffect, useState } from "react"; 
import * as gamesServices from "../services/gamesService.js";
 
const useFetch = () => {
    const [state, setState ] = useState([]);

    useEffect(()=>{
        const response = async () =>{

            let result= await gamesServices.getAllGames();
            setState(Object.values(result))
        }
        response();
    },[state]);
    return state;
}

export default useFetch;