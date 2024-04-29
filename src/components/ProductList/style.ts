import styled from "styled-components";

export const StyledProductList = styled.ul`
    display: flex;
    overflow-y: scroll;
    gap: 1rem;

    @media (min-width: 720px){
        padding-left: 1rem;
        overflow-y: hidden;
        flex-wrap: wrap;
    }
`