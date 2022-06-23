import * as React from "react"; 
import {textDiv} from "./Text.module.css"
import PlayBar from "./PlayBar"

const Texts = ({props, children})=>{

    const [text, setText] = React.useState(""); 
    const [count, setCount] = React.useState(0); 
    const [time, setTime] = React.useState(0); 
    const [width, setWidth] = React.useState(0); 

    React.useEffect(()=>{
        
        const intervalId = setInterval(()=>{
            if (count < children.length && count >= 0){
                setText(text + children[count]); 
                console.log(count, children[count]); 

            }
            setCount(count + 1); 
            setWidth(count/children.length * 100); 
        }, Math.random() * 70 + 40)
        return ()=>clearInterval(intervalId); 
    }); 

    return (
        <div>
            <div className={textDiv}>
                {text}
            </div>
            <PlayBar title="Main" width={width + "%"}/>
        </div>


    )
}

export default Texts; 