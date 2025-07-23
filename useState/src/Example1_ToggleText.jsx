import { useState } from "react";



// Example 1 Toggling Text on Button Click

function ToogleText(){
    const[text,setText] = useState("Hello");

    const handleToggle=()=>{
        setText(prev=>prev==="Hello"? "Welcome Back!" : "Hello")
    }
    return(
    <div className="p-4 text-center " >
        <p className="text-xl font-bold">{text}</p>
        <button className="mt-4 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-300 cursor-pointer" onClick={handleToggle}>Toggle Text</button>
    </div>
    )

};

export default ToogleText;