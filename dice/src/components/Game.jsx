import styled from "styled-components";
import web from "../images/diceImg.jpg";


const Container=styled.div`
height: 100vh;

display: flex;
margin: 0 auto;
justify-content: center;
align-items: center;
gap:10px;

.right{
    h1{
        font-size:50px;
        white-space: nowrap;
    }
}
`;

const Div =styled.div`
height:60%;
 
 img{
    object-fit: cover;
    height: 100%;
 }
`;

const Button=styled.button`
background-color:black;
color:white;
padding: 10px;
width:140px;
border-radius: 5px;
transition: 0.5s ease-in;
cursor: pointer;

    &:hover{
        border: 1px solid black;
        background-color: white;
        color:black;
        transition: 0.4s ease-in;
    }
`;

const Game=({togglebtn})=>{
    return(<>
        <Container>
        <Div>
        <img src={web} alt="dice" />
        </Div>
            <div className="right">
                <h1>Dice Game</h1>
                <Button onClick={togglebtn}>Play Now</Button>
            </div>
        </Container>
    </>);
};

export default Game;

