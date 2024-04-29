import styled from "styled-components";

export const StyledMain = styled.main`
    .productsContainer{
        padding: 0rem 1rem;
        height: calc(100vh - 8.75rem);
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    @media (min-width: 720px){
        .productsContainer{
            height: fit-content;
            padding: 3rem 15vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`