import React from 'react';
import { Container, Title, Subtitle, ImageContainer, LeftContainer, RightContainer, AvatarContainer } from './styles';

const Home = () => {
    return (
        <>
           
            <LeftContainer>
                <ImageContainer />
                <div>
                    <Title>Domine suas finanças com <br/>a Ganhos e Gastos.</Title>
                    <Subtitle>Uma visão clara de suas finanças para tomar decisões financeiras mais inteligentes.</Subtitle>
                </div>
            </LeftContainer>

            
            <RightContainer>
                <AvatarContainer />
                <div>
                    <Title>Fale com a Gal <br/>Nossa conselheira financeira</Title>
                    <Subtitle>Explore nosso chat com IA e obtenha respostas rápidas e personalizadas sobre suas finanças.</Subtitle>
                </div>
            </RightContainer>
        </>
    );
};

export default Home;
