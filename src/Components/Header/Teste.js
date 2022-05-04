import React, {useState} from "react";
import Submenu1 from '../Submenus/Submenu1.js'


function Teste(){
    
    function OpenSubmenu1(){
        return( 
        <Submenu1/>
        )
    }

    const [OpenOrClose,setOpenOrClose]=useState(false)

    const aberto=()=>{
        return 'Submenu1 aberto'
    }

    const fechado=()=>{
        return 'Submenu1 fechado'
    }

    return (
        <>
            <p>{OpenOrClose?OpenSubmenu1():fechado()}</p>
            <button onClick={()=>setOpenOrClose(!OpenOrClose)}>Clique para alternar</button>
        </>
    )

}

export default Teste