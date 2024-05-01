import styled from "styled-components";

const ScoreDiv = styled.div`
h1{
    font-size: 90px;
    
};
p{
    font-size: 24px;
    font-weight: 500px;
};
`;

const Scores= ({score})=>{
    return(<>
        <ScoreDiv>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreDiv>
    </>);
};

export default Scores;
