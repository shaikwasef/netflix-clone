import React , {useEffect,useState} from 'react'
import "./PlansScreen.css"


function PlansScreen() {
    const [products,setProducts] = useState([]);



    return (
        <div className ="plansScreen">
        <div className = "plansScreen_plan">
                <div className="plansScreen_info">
                    <h5>Premium</h5>
                    <h6>4K + HDR</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>   
            <div className = "plansScreen_plan">     
                <div className="plansScreen_info">
                    <h5>Basic</h5>
                    <h6>720p</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>
            <div className = "plansScreen_plan">  
                <div className="plansScreen_info">
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>    
        
        </div>
    )
}

export default PlansScreen
