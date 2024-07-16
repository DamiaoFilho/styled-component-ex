import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Placeholder } from "./style";

type propsType = {
    text: string
}

export function Input2(props: propsType) {
    return (
        <Container>
            <Placeholder>{props.text}</Placeholder>
        </Container>
    )
}