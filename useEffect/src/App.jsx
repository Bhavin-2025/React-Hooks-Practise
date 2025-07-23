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

      <OnlineStatus/>
    </>
  );
}

export default App;
