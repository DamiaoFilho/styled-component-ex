import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Text1, TitleContainer, Section, Title, TaskContainer, Task } from "./style";
import { Input2 } from "../../components/input2";
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/checkbox";

export default function Tasks({ navigation }) {

    return (
        <Section>
            <StatusBar backgroundColor={"#1DB863"}></StatusBar>
            <TitleContainer>
                <Title>Agenda.IFRN</Title>
                <Text1>
                    Você tem 2
                    <Text1 $primary> tarefas</Text1>

                </Text1>
            </TitleContainer>
            <Checkbox gradient={true} text="Pagar Boleto" />
            <Checkbox text="Arrumar a cama" />
            <Checkbox gradient={true} text="Entregar notebook" />
        </Section>
    )
}