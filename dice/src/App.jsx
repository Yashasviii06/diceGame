
import { useState } from "react";
import Game from "./components/Game";
import Play from "./components/Play";

const App =()=>{
  const [start, setStart]= useState(false);
  const togglebtn=()=>{
    setStart(!start);
    console.log("State toggled:", start);
   
  };

  return(
    <>
      {start ? <Play /> : <Game togglebtn={togglebtn} />}
    </>
  );
};

export default App;