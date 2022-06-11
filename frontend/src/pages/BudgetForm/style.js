import styled from 'styled-components';
export const BudgetMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-primary);
    color: var(--color-button-text);
`;

BudgetMain.ButtonPrimary = styled.article`
    margin-bottom: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const FormStyle = styled.main`
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        & {
            width: 100%;
            flex-flow: row wrap;
            justify-content: space-around;
        }
    }
    @media (min-width: 1024px) {
        & {
            flex-wrap: row wrap;
            justify-content: center;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10rem;
`;
