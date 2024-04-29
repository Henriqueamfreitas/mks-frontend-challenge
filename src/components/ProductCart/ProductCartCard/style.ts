import styled from "styled-components";

export const StyledProductCartCard = styled.li`
    display: flex;
    background-color: var(--color-grey0);
    border-radius: .5rem;
    gap: .5rem;
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
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
         width: 46px;
         height: 57px;
    }

    h2{
        width: 40%;
        max-width: 40%;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        div{
            border: solid 0.3px var(--color-grey300);
            border-radius: .25rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            button{
                border: none;
                background-color: transparent;
            }
            span{
                border-left: solid 0.3px var(--color-grey300);
                border-right: solid 0.3px var(--color-grey300);
                padding: 0rem .5rem;
            }
        }
    }


    @media (min-width: 720px){
        padding: 1.5625rem 1.4375rem;
    }
`