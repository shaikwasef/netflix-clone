import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <header className = "banner" style = {{
            backgroundImage : `url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundSize : "cover" ,
            backgroundImagePosition : "center center"
        }}>

        <div className = "banner_content">
            <h1 className = "banner_title">Banner Title</h1>
            <div className = "banner_buttons">
                <button></button>
                <button></button>
            </div>
        </div>  
        </header>
    )
}

export default Banner;

