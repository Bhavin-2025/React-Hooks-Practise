import { useState, useEffect } from "react";
function WidthSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("Event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed");
    };
  },[]);

  return (
    <div>
      <h2>Window Width: </h2>
      <p>width: {width}px</p>
    </div>
  );
}

export default WidthSize;
