import styled from "styled-components/native";


export const Section = styled.View`
    flex: 1;
    align-items: center;
    background: white;
`;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #1DB863;
    width: 100%;
    height: 18%;
    justify-content: space-around;
    margin-bottom: 48px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: white;
    font-weight: 700;
    text-align: left;
    margin: 18px;
`;


export const Text1 = styled.Text<{ $primary?: boolean; }>`
    font-weight: ${props => props.$primary ? "bold" : "normal"};;
    font-size: 15px;
    color: white;
    text-align: right;
    margin: 18px;
    margin-top: 25px;
`;





export const Task = styled.View`

`;