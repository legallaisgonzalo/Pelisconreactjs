import { useHistory } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import Style from "./Search.module.css";
import {useQuery} from "../hooks/useQuery";
import { FaSearch } from 'react-icons/fa';

export function Search(){
    const query = useQuery();
    const search = query.get("search");

    //const [searchText, setSearchText]= useState("");
    const history = useHistory()

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    };


    return(
       <form className={Style.searchContainer} onSubmit={handleSubmit}> 
            <div className={Style.searchBox}>
                <input 
                className={Style.searchInput}
                value={search} 
                placeholder="Title"
                aria-label="Search Movies"
                onChange={(e) => {
                    const value = e.target.value;
                    history.push("/?search=" + value);

                }}
                type="text"/>
                <button  className={Style.searchButton} type="submit"> <FaSearch/> </button>
            </div>
        </form>

    );
}