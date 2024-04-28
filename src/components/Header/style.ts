import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--color-brand);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75rem 4.0625rem;
    img{
        width: 1.1875rem;
        height: 1.125rem;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1rem;
        gap: 1rem;
        border: none;
        border-radius: .5rem;
        background-color: var(--color-grey0);
        transition: .5s;
    }

    button:hover{
        background-color: var(--color-grey300);
        transition: .5s;
    }
`