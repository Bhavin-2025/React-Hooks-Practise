import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchApi from "./Example2_FetchApi";
import TimerCount from "./Example1_TImercount";
import WidthSize from "./Example3_WindowSize";
import UpdateTitle from "./Example4_TitleUpdate";
import KeyboardKey from "./Example5_Keyboardkey";
import ThemeSwitcher from "./Example6_Themeswitcher";
import AutoSaveForm from "./Example7_Autosaveform";
import OnlineStatus from "./Example8_ Internet";
import IdleTimer from "./Example9_IdleTimer";
import ScrollProgress from "./Example10_ScrollPage";

function App() {
  return (
    <>
      {/* <TimerCount/> */}
      {/* <FetchApi/> */}
      {/* <WidthSize/> */}
      {/* <UpdateTitle/> */}
      {/* <KeyboardKey/> */}
      {/* <ThemeSwitcher/> */}
      {/* <AutoSaveForm/> */}
      {/* <IdleTimer/> */}
      {/* <OnlineStatus/> */}
      <ScrollProgress/>

      <ScrollProgress />

{/* Dummy content for scrolling */}
<div className="p-6 space-y-4 mt-10">
  {Array.from({ length: 200 }).map((_, i) => (
    <p key={i} className="text-gray-700">
      Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  ))}
</div>
    </>
  );
}

export default App;
