import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Placeholder } from "./style";
import { AntDesign } from '@expo/vector-icons';

type propsType = {
    text: string
}

export function Input(props: propsType) {
    return (
        <Container>
            <Placeholder>{props.text}</Placeholder>
        </Container>
    )
}