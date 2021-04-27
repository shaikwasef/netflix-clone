//Commented
import React , {useEffect,useState} from 'react'
import "./Nav.css";
import {useHistory} from "react-router-dom"

function Nav() {
    //handle navbar visibility
    const [show,handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    //useEffect attaches the scroll eventListener to transitionNavBar and cleansup after use
    useEffect( () => {window.addEventListener("scroll" , transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar) ;
    }, [])

    return (
        <div className = {`nav ${show && "nav_black"}`}>
            <div className = "nav_contents">
            {/* useHistory to move to the route defined by path "/" or path "/profile" refer App.js */}
            <img className = "nav_logo"  onClick = {() => history.push("/")} src = "https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt = "netflix-logo" />
            <img className = "nav_avatar" onClick = {() => history.push("/profile")} src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = "avatar"/>  
            </div>
        </div>
    )
}

export default Nav
