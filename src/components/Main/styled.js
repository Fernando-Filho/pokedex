import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 120px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
    justify-content: center;
    width: 90%;
`

export const CardPokemonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 90%;
`

export const H3 = styled.p`
    transition: .1s;
    color: rgba(255, 255, 255, .4);

    &:hover{
        color: rgba(255, 255, 255);
        text-decoration: underline;
        cursor: pointer;
    }
`