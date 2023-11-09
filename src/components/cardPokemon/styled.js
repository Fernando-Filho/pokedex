import styled, {keyframes} from 'styled-components'

export const CardContainer = styled.div`
    transition: .2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    /* height: 200px; */
    width: 150px;
    padding: 10px;
    border-radius: 25px;
    background-color: #949ca0;
    box-shadow: 1px 1px 10px 1px rgb(51, 52, 56, .5);
    text-align: center;

    &:hover{
        box-shadow: 0px 0px 20px 5px ${(props) => props.$boxshadowtypecolor || "var(--normal)"};
    }
`

export const ImageCard = styled.img`
    height: 100px;
    width: 100px;
`

export const TipoPokemmonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
`

export const TipoPokemmon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    border-radius: 5px;
    background-color: ${(props) => props.$backgroundtypecolor || "var(--normal)"};
`