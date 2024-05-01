// import { useState } from "react";
import dice_1 from "../images/dice_1.png";
import dice_2 from "../images/dice_2.png";
import dice_3 from "../images/dice_3.png";
import dice_4 from "../images/dice_4.png";
import dice_5 from "../images/dice_5.png";
import dice_6 from "../images/dice_6.png";
import styled from "styled-components";

const BodyDeco = styled.div`
display:flex;
align-items: center;
justify-content:center;`;
const DiceCont = styled.div`
display:flex;
border: 2px pink solid;
flex-direction: column;
margin-top:48px;
width: 250px;
  img{
    object-fit: cover;
    width: 100%;
  }
  .dices{
    cursor: pointer;
  }
`;
const diceImg=[dice_1,dice_2, dice_3, dice_4, dice_5, dice_6]
const Dice= ({currentState, setCurrentState, roll})=>{
  const handleclick=()=>{
  roll();
};
   return(
        <>
        <BodyDeco>
        <DiceCont>
        <div className="dices" onClick={handleclick}>
            <img src={diceImg[currentState-1]} alt="dice1"/>
            </div>
            <p>Click Dice to Roll</p>
            </DiceCont>
            </BodyDeco>  
        </> 
    );
};

export default Dice;

