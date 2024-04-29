import styled from "styled-components";

export const StyledProductCartCard = styled.li`
    display: flex;
    background-color: var(--color-grey0);
    border-radius: .5rem;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: .5rem;

    .excludeAllButton{
        position: absolute;
        top: -0.25rem;
        right: -0.25rem;
        border: none;
        background-color: var(--color-grey600);
        color: var(--color-grey0);
        border-radius: 50%;
        font-size: 0.875rem;
        font-weight: 400;
    }
    img{
         width: 46px;
         height: 57px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            button{
                border: none;
                background-color: transparent;
            }
        }
    }


    @media (min-width: 720px){
        padding: 1.5625rem 1.4375rem;
    }
`