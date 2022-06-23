import * as React from "react"; 
import {pageTitle, slider, playBarDiv, next} from "./PlayBar.module.css"; 

const PlayBar = (props)=>{

    return (
        <div className={playBarDiv}> 
            <p className={pageTitle}>{props.title}</p>
            <div className={slider} style={{width: props.width, transition: "ease-in-out all .1s"}}></div>
            
        </div>
    )
}

export default PlayBar; 