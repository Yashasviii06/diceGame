import Select from "./Select";
import styled from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import Scores from "./Scores";
const Col=styled.div`
display:flex;
justify-content:space-between;
margin:20px;
align-items:center;`;
 
const Play= ()=>{
    const [score, setScore]=useState(0);
    const [selectNum, setSelectNum]=useState();
    const [currentState, setCurrentState]=useState(1);
   // const [ranNum, setRanNum]=useState();
    const numGenerate= (min,max)=>{
        // console.log(Math.floor(Math.random()*(max-min)+min));
          return Math.floor(Math.random()*(max-min)+min);
         
      };
        const roll=()=>{
          const ranNum=  numGenerate(1, 7);
          setCurrentState(ranNum);
          if(selectNum===ranNum){
            setScore((pre)=>pre + ranNum);
           }else{
            setScore((pre)=>pre - 2);
           }
        };
    return(
    <>
        <Col>
            <Scores score={score}/>
            <Select selectNum={selectNum}
                    setSelectNum={setSelectNum} />
        </Col>
        <Dice currentState={currentState}
            setCurrentState={setCurrentState} 
                roll={roll}
            />
       
    </>);
};

export default Play;