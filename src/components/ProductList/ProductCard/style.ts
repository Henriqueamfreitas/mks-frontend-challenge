import styled from "styled-components";

export const StyledProductCard = styled.li`
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1352);
    width: 218px;
    min-width: 218px;
    height: 292.8px;
    max-height: 292.8px;
    border-radius: .5rem;
    div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        img{
            align-self: center;
            width: 111px;
            height: 108px;
        }
        div{
            height: 50px;
            margin-top: 0.875rem;
            gap: 1rem;
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: .5rem;
            p{
                background-color: var(--color-grey400);
                padding: .25rem 0.4375rem;
                border-radius: 0.3125rem;
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(50px - .5rem);
            }
        }
        p{
            height: 50px;
        }
    }

    button{
        width: 100%;
        border: none;
        background-color: var(--color-brand);
        border-radius: 0rem 0rem .5rem .5rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-grey0);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        padding: 0.4375rem 0rem;
    }

    @media (min-width: 720px){}
`