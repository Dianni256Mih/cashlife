import React from "react";
import {View, Text} from 'react-native';
import {Background} from '.styles';
import {Background, Container, Logo, AreaInput, Input} from '.styles';

export default function SignIn(){
    return(
        <Background>
            <Container>
                <Logo> source = {require('../../assets/Logo.png')}</Logo>

                <AreaInput>
                    <Input placeholder="Seu email"/>
                </AreaInput>

            </Container> 
        </Background>
    );
}