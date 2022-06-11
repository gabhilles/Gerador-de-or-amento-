import React from 'react';
// Components
import FormField from '../../components/FormField/';
// Styles
import {BudgetMain, FormStyle} from './style';

// Images

export default function BudgetForm() {
    return (
        <>
            <BudgetMain>
                <FormStyle>
                    <FormField label="Nome" />
                    <FormField label="CPF / CNPJ" />
                    <FormField type="tel" label="Whatsapp" />
                    <FormField type="textarea" label="Biography" />
                </FormStyle>
            </BudgetMain>
        </>
    );
}
