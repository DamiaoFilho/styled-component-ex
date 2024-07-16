import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Logo, Section, Title } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import logo_ifrn from "../../assets/logo.png"
import Routes from "../../routes";

export function Home({ navigation }) {
    return (
        <Section>
            <StatusBar backgroundColor={"#1DB863"}></StatusBar>
            <Logo source={logo_ifrn}></Logo>
            <Title>Agenda IFRN</Title>
            <Input text="Login"></Input>
            <Input text="Senha"></Input>
            <Button primary={false} page="Registrar" text="Entrar" navigation={navigation}></Button>
        </Section>
    )
} 