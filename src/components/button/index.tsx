import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Placeholder } from "./style";

type propsType = {
    text: string,
    page: string,
    navigation: any,
    primary: boolean,
}

export function Button(props: propsType) {
    if (props.primary) {
        return (
            <Container onPress={() => props.navigation.navigate(props.page)} $primary>
                <Placeholder>{props.text}</Placeholder>
            </Container>
        )
    } else {
        return (
            <Container onPress={() => props.navigation.navigate(props.page)}>
                <Placeholder>{props.text}</Placeholder>
            </Container>
        )
    }
}

