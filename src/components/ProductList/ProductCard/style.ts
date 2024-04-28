import styled from "styled-components";

export const StyledProductCard = styled.li`
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 217.56px;
    min-width: 217.56px;
    height: 250px;
    img{
        width: 111px;
        height: 50%;
    }
    
    div{
        padding: 1rem 1rem .5rem 1rem;
        div{
            p{
                background-color: var(--color-grey400);
            }
        }
    }

    button{
        background-color: var(--color-brand);
        border: none;
        width: 100%;
        border-radius: 0rem 0rem .5rem .5rem;
        font-family: "Montserrat, sans-serif";
        font-size: 14px;
        font-weight: 600; 
        color: var(--color-grey0);

        img{
            width: 12px;
            height: 13.5px;
        }
    }
`