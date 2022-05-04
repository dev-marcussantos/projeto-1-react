import React,{useState} from "react";
import Logo from "../../Assets/logo.svg"
import IconArrowDown from "../../Assets/icon-arrow-down.svg"
import IconArrowUp from "../../Assets/icon-arrow-up.svg"
import './Header.css'
import Submenu1 from "../Submenus/Submenu1";
import Submenu2 from "../Submenus/Submenu2";

function Header(){

    function ToggleArrow1(){
        return(
            <img src={IconArrowUp} className="IconArrow"/>
        )
    }

    function ToggleArrow2(){
        return(
            <img src={IconArrowUp} className="IconArrow"/>
        )
    }

    function OpenSubmenu1(){
        return( 
        <Submenu1/>
        )
    }

    function OpenSubmenu2(){
        return( 
        <Submenu2/>
        )
    }

    const [Submenu1IsOpen,setToClose1]=useState(false)
    const [Submenu2IsOpen,setToClose2]=useState(false)


    return(
        <header className="Header">
            <div className="Superior">
                <img src={Logo} className="Logo" alt="Logo"/>
                <div className="FeaturesButton" onClick={()=>setToClose1(!Submenu1IsOpen)}>
                    <a>Features</a>
                    {Submenu1IsOpen?ToggleArrow1():<img src={IconArrowDown} className='IconArrow'/>}
                </div>
                <div className="CompanyButton" onClick={()=>setToClose2(!Submenu2IsOpen)}>
                    <a>Company</a>
                    {Submenu2IsOpen?ToggleArrow2():<img src={IconArrowDown} className='IconArrow'/>}
                    </div>
                <div className="CareersButton"><a>Careers</a></div>
                <div className="AboutButton"><a>About</a></div>
                <div className="LoginButton"><a>Login</a></div>
                <div className="RegisterButton"><a>Register</a></div>
            </div>
            <div className="Submenus">
            <div className="SubmenuFeatures">{Submenu1IsOpen?OpenSubmenu1():<></>}</div>
            <div className="SubmenuCompany">{Submenu2IsOpen?OpenSubmenu2():<></>}</div>
            </div>
        </header>
    )
};

export default Header;