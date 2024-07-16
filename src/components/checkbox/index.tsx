import { StyleSheet, View, StatusBar } from "react-native";
import { Container, Text, TouchableOpacity, ListContainer, Trash } from "./style";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import trash from "../../assets/trash.png"
import { LinearGradient } from 'expo-linear-gradient';


type propsType = {
    text: string,
    gradient?: boolean,
}

export function Checkbox(props: propsType) {
    const [statuscheckbox, setStatusCheckbox] = useState(false)

    return (
        <Container $completed>
            {props.gradient ? (
                <LinearGradient
                    colors={['#c4c4c45e', 'transparent']}
                    style={styles.background}
                    start={{ x: 0.1, y: 0 }}
                    end={{ x: 0.6, y: 0 }}
                />
            ) : null}
            <ListContainer>
                <TouchableOpacity onPress={() => {
                    if (statuscheckbox) { setStatusCheckbox(false) } else { setStatusCheckbox(true) }
                }}>
                    {statuscheckbox ?
                        (<Ionicons name="checkbox" size={24} color="#1DB863" />)
                        :
                        (<MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#B2B2B2" />)
                    }
                </TouchableOpacity>
                {statuscheckbox ?
                    (<Text $completed>{props.text}</Text>) : (<Text>{props.text}</Text>)
                }

            </ListContainer>
            <Trash source={trash}></Trash>
        </Container >
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 50,
    },
});