import React from 'react';
import {Link} from 'react-router-dom';
// components
import ButtonPrimary from '../../components/ButtonPrimary';
//styles
import {MainHome, BlockContent} from './style';
//images
import logo from '../../assets/images/logo.png';

function Home() {
    return (
        <MainHome>
            <BlockContent.Header>
                <BlockContent.Logo src={logo} alt="Dr Ferrugem" />
                <BlockContent.Title> Dr. Ferrugem</BlockContent.Title>
            </BlockContent.Header>
            <BlockContent>
                <BlockContent.Section>
                    <BlockContent.Buttons>
                        <ButtonPrimary.Purple as={Link} to="budget">
                            Criar Orçamento
                        </ButtonPrimary.Purple>
                        <ButtonPrimary.Purple>Adicionar Cliente</ButtonPrimary.Purple>
                    </BlockContent.Buttons>
                </BlockContent.Section>
            </BlockContent>
        </MainHome>
    );
}
export default Home;
