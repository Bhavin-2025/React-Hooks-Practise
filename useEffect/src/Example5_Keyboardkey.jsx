import { useState,useEffect } from "react";

function KeyboardKey(){
 const[key,setKey] = useState("")

    useEffect(()=>{

        const handleKeyDown = (event)=>{
            setKey(event.key);
        }

        window.addEventListener("keydown",handleKeyDown);

        return()=>{
            window.removeEventListener("keydown",handleKeyDown)
        }
        
    },[]
    );
    return(
        <div>
            <h2>Last Key Pressed</h2>
            <p>Try pressing any key on keyboard</p>
            <p>Key: {key}</p>
        </div>
    )
}

export default KeyboardKey;