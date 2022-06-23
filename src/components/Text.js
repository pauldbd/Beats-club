import * as React from "react"; 
import {textDiv} from "./Text.module.css"
import {titleText} from "./Title.module.css"; 

const Texts = ({props, children})=>{

    const [text, setText] = React.useState(""); 
    const [count, setCount] = React.useState(0); 
    const [time, setTime] = React.useState(0); 

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
        <div className={textDiv}>
            {text}
        </div>
    )
}

export default Texts; 