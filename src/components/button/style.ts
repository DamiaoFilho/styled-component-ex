import styled from "styled-components/native";


export const Container = styled.TouchableOpacity<{ $primary?: boolean; }>`
    background: ${props => props.$primary ? "#1DB863" : "#666666"};
    width: 75%;
    height: 7%;
    justify-content: center;
    align-items: center;
    margin: 18px;
    border-radius: 5px;
`;


export const Placeholder = styled.Text`
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
  `;     