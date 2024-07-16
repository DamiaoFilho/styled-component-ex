import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Placeholder } from "./style";
import { AntDesign } from '@expo/vector-icons';

type propsType = {
    text: string
}

export function InputSelect(props: propsType) {
    return (
        <Container>
            <Placeholder>{props.text}</Placeholder>
            <AntDesign style={{ marginRight: 16 }} name="caretdown" size={16} color="black" />
        </Container>
    )
}