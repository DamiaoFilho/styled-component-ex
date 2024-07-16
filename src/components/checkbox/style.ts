import styled from "styled-components/native";


export const Container = styled.View<{ $completed: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7%;
`;


export const Text = styled.Text<{ $completed: boolean }>`
    color: ${props => props.$completed ? "#1DB863" : "#666666"};
    text-decoration-line: ${props => props.$completed ? "line-through" : "none"};
    font-size: 14px;
    font-weight: 500;
`;


export const TouchableOpacity = styled.TouchableOpacity`
    margin: 10px;
    margin-left: 24px;
`;

export const ListContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Trash = styled.Image`
    width: 24px;
    height: 24px;
    margin-right: 16px;
`;