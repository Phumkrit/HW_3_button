import React from "react";
import useHover from "./hooks/useHover";
const Menu = () =>{

    const [hover,mouseOver,mouseOut] = useHover ()

    return(

        <div>
            <h1>MENU</h1>
            {
                hover ? <h3>WELCOME</h3> : null
            }
                <img onMouseOver={mouseOver} onMouseOut={mouseOut} src="./logo192.png" alt="logo"></img>

        </div>

    )
    
}
export default Menu