import styled, { keyframes } from "styled-components";

const frames = keyframes`
    0%{
        height: 10rem;
    }

    50%{
        height: 5rem;
    }

    100%{
        height: 10rem;
    }
`

export const StyledLoading = styled.div`
    width: 100vw;
    height: 502px;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;

    div{
        animation: ${frames} 1s linear infinite;
        background-color: var(--color-grey600);
        height: 10rem;
        width: 2rem;

        &:nth-child(2){
            animation-delay: 0.2s;
        }

        &:nth-child(3){
            animation-delay: 0.4s;
        }
    }
`;
