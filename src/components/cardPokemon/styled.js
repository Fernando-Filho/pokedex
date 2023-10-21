import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 200px;
    width: 150px;
    border-radius: 25px;
    background-color: #137297;
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
    gap: 4px;
    width: 100%;
`

export const TipoPokemmon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
`