// import { useState } from "react";
import styled from "styled-components";

const Main=styled.div`
display:flex;
flex-direction:column;`;
const Cont= styled.div`
display:flex;
gap:5px;
flex-wrap: wrap;
`;
const Box=styled.div`
border:2px solid black;
padding:20px;
height: 20px;
cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
    }
`;

const Select=({selectNum,setSelectNum})=>{
    const arr=[1,2,3,4,5,6];
    console.log(selectNum);
    return(
    <>
    <Main>
           <Cont>
           {
            arr.map((val,index)=>(
                <Box onClick={()=>setSelectNum(val)}
                 key={index}>{val}
                </Box>
                
            ))
           }
            </Cont>
           <p>Select Number</p>
      </Main>     
    </>)
}

export default Select;

