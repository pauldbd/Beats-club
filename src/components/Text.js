import * as React from "react"; 
import {textDiv} from "./Text.module.css"
// import PlayBar from "./PlayBar"

const Texts = ({props, children})=>{

    const [text, setText] = React.useState(""); 
    const [count, setCount] = React.useState(0); 

    React.useEffect(()=>{
        
        const intervalId = setInterval(()=>{
            if (count < children.length && count >= 0){
                setText(text + children[count]); 
                console.log(count, children[count]); 

            }
            setCount(count + 1); 
        }, Math.random() * 70 + 40)
        return ()=>clearInterval(intervalId); 
    }); 

    return (
        <div>
            <div className={textDiv}>
                {text}
            </div>
        </div>


    )
}

export default Texts; 