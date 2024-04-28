import styled from "styled-components";

export const StyledProductList = styled.ul`
    height: calc(100vh - 8.75rem);
    max-height: calc(100vh - 8.75rem);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    
    @media (min-width: 720px){
        padding: 0 15.4375rem;
    }
`