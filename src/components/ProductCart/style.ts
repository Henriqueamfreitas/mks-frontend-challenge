import styled from "styled-components";

export const StyledProductCart = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    section{
        background-color: var(--color-brand);
        padding: 1rem .5rem;
        position: relative;

        div{
            h2{
                width: 200px;
            }
            .closeModalButton{
                position: absolute;
                right: 1rem;
                top: 1rem;
                width: 38px;
                height: 38px;
                border: none;
                background-color: var(--color-grey600);
                border-radius: 50%;
                color: var(--color-grey0);
                font-size: 1.75rem;
                font-weight: 400;
            }
        }
    
        ul{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            max-height: 162px;
            height: 162px;
            overflow-y: scroll;
            padding: .5rem 1rem 0rem 0rem;
        }

        .emptyCarMessage{
            height: 201px;
            min-height: 201px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .totalValue{
            display: flex;
            gap: .5rem;
            margin-bottom: 1rem;
        }

        .finalizePurchase{
            background-color: var(--color-grey600);
            position: absolute;
            top: 330px;
            left: 0px;
            width: 100%;
            border: none;
            color: var(--color-grey0);
            padding: 1rem 0;
            font-size: 1.75rem;
            font-weight: 700;
        }
    }

    @media (min-width: 720px){
        justify-content: flex-end;
        align-items: flex-start;

        section{
            height: 100vh;
            width: 486px;
            padding: 2.25rem 2.9375rem;

            div{
                .closeModalButton{
                    top: 2.25rem;
                    right: 2.9375rem;
                }
            }

            ul{
                gap: 1.375rem;
                height: 57vh;
                max-height: 57vh;
                overflow-y: auto;
                margin-top: 4rem; 
                margin-bottom: 2rem;
            }

            .emptyCarMessage{
                height: 60vh;
                max-height: 60vh;
            }

            .totalValue{
                gap: 0rem;
                justify-content: space-between;
                margin-bottom: 2rem;
            }

            .finalizePurchase{
                position: absolute;
                top: 665px;
            }
        }


    }
`