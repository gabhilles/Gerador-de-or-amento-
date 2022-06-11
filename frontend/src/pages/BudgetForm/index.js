import React from 'react';
import {Link} from 'react-router-dom';

// Components
import FormField from '../../components/FormField/';
import ButtonPrimary from '../../components/ButtonPrimary';
// Styles
import {BudgetMain, FormStyle, Footer} from './style';

// Images

export default function BudgetForm() {
    const Clique = () => {};
    return (
        <>
            <BudgetMain>
                <FormStyle>
                    <FormField label="Nome" />
                    <FormField label="CPF / CNPJ" />
                    <FormField type="tel" label="Whatsapp" />
                    <FormField label="Endereço" />
                    <FormField label="Cidade" />
                    <FormField label="Estado" />
                </FormStyle>
                <FormStyle>
                    <FormField label="Nome do Item" />
                    <FormField type="num" label="Quantidade" />
                    <FormField label="Descrição" />
                    <FormField label="Valor" />
                    <ButtonPrimary onClick={Clique}>+</ButtonPrimary>
                </FormStyle>

                <Footer>
                    <ButtonPrimary.Purple as={Link} to="/">
                        {' '}
                        Voltar
                    </ButtonPrimary.Purple>
                    <ButtonPrimary.Green> Criar Orçamento</ButtonPrimary.Green>
                </Footer>
            </BudgetMain>
        </>
    );
}
