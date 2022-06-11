import styled from 'styled-components';

const ButtonPrimary = styled.button`
    border: 0;
    border-radius: 8px;
    padding: 22px 42px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: var(--color-button-text);
    background-color: var(--color-primary-lighter);
    cursor: pointer;
    transition: background-color 200ms linear;
`;
ButtonPrimary.Purple = styled(ButtonPrimary)`
    &:hover {
        background-color: var(--color-primary-light);
        transition: background-color 200ms linear;
    }
`;
ButtonPrimary.Green = styled(ButtonPrimary)`
    background-color: var(--color-secundary);
    &:hover {
        background-color: var(--color-secundary-dark);
        transition: background-color 200ms linear;
    }
`;

export default ButtonPrimary;
