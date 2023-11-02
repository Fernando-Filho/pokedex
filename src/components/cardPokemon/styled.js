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
    background-color: #949ca0;
    /* background-color: #6890f0; */
    /* box-shadow: 1px 1px 10px 1px rgb(51, 52, 56, .5); */
    box-shadow:
                -2px -1px 15px 1px var(--water),
                2px 1px 15px 1px var(--fire);

    text-align: center;
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
    /* background-color: rgba(255, 255, 255, 0.3) */
    background-color: ${(props) => props.backgroundTypeColor || 'var(--normal)' };
`