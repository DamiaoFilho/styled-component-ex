import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Logo, Section, Title, StatusView } from "./style";
import { Input2 } from "../../components/input2";
import { Button } from "../../components/button";
import logo_ifrn from "../../assets/logo.png"
import { Input } from "../../components/Input";
import { InputSelect } from "../../components/inputSelect";

export default function Register({ navigation }) {
    return (
        <Section>
            <StatusBar backgroundColor={"#1DB863"}></StatusBar>
            <Title>
                Cadastro de Tarefa
            </Title>
            <Input2 text="Título:" />
            <Input2 text="Descrição:" />
            <InputSelect text="Categorias:" />
            <Input2 text="Data:" />
            <Button navigation={navigation} page="Registrar" text="Cadastrar" primary={true}></Button>
        </Section>
    )
}