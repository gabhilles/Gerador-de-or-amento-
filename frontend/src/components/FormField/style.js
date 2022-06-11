import styled from 'styled-components';

export const FormFieldWrapper = styled.div`
    position: relative;
    margin: 2rem;

    &:focus-within::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.3rem;
        margin: 0 auto;
        background: var(--color-secundary);
    }
`;
FormFieldWrapper.Label = styled.label`
    color: var(--color-text-complement);
    cursor: pointer;
`;
FormFieldWrapper.Input = styled.input`
    width: 100%;
    height: 5.6rem;
    border-radius: 0.6rem 0.6rem 0 0;
    color: var(--color-text-complement);
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 1.6rem;
    @media (min-width: 1024px) {
        & {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        }
    }
`;
