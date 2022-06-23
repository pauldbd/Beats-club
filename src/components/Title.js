import * as React from "react"; 
import {titleDiv, titleText} from "./Title.module.css"; 

const Title = ()=>{
    return (
        <div className={titleDiv}>
            <span><h1 className={titleText}>Ivory Hills</h1></span>
        </div>
    )
}

export default Title; 