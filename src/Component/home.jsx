import { useState } from "react"
import { MenuExplore } from "./menuExplore"
export const  Home=()=>{
    const [category,setCategory]=useState("All");
    return (

        <div>

            <MenuExplore />
        </div>
    )
}