import styled, {keyframes} from 'styled-components'

export const CardContainer = styled.div`
    transition: .4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    height: 240px;
    width: 150px;
    padding: 10px;
    border-radius: 15px;
    background-color: ${(props) => props.$boxshadowtypecolor || "var(--normal)"};
    box-shadow: 1px 1px 10px 1px rgb(51, 52, 56, .5);
    text-align: center;
    cursor: pointer;
    
    &:hover{
        box-shadow: 0px 0px 20px 5px ${(props) => props.$boxshadowtypecolor || "var(--normal)"},
        inset 0px 0px 20px 5px ${(props) => props.$boxshadowtypecolor || "var(--normal)"};
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
    height: 24px;
    min-width: 48%;
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, .1);
    background-color: ${(props) => props.$backgroundtypecolor || "var(--normal)"};
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, .4);
`