import styled from 'styled-components';

export const MainHome = styled.main`
    width: 100%;
    height: 100vh;
    padding: 4rem;
    background-color: var(--color-primary);
    color: var(--color-title-in-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
MainHome.Icon = styled.img`
    width: 3rem;
    margin-right: 1rem;
`;

// --------------------------------------------------------------
export const BlockContent = styled.section`
    width: 100%;
    padding: 0 0 5rem 0;
    @media (min-width: 768px) {
        & {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        & > img {
            width: 70%;
            margin-left: 60px;
        }
    }
    @media (min-width: 1024px) {
        & > img {
            width: 50%;
        }
    }
`;
BlockContent.Header = styled.header`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
BlockContent.Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        & {
            width: 100%;
            flex-flow: row wrap;
            justify-content: center;
        }
    }
    @media (min-width: 1024px) {
        & {
            flex-wrap: nowrap;
            justify-content: center;
        }
    }
`;
BlockContent.Content = styled.article`
    @media (min-width: 768px) {
        & {
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
        }
    }
`;
BlockContent.Buttons = styled.article`
    margin-bottom: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;
BlockContent.Title = styled.h2`
    color: var(--color-text-title);
    font-size: 3rem;
    text-align: center;
    width: 100%;
    padding: 1.2rem;
`;
BlockContent.Logo = styled.img`
    width: 10rem;
`;
