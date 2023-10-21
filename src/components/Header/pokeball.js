import styled, { keyframes } from 'styled-components'

const girar = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
export const PokeballContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    &:active{
        animation: 1s ${girar};
    }
`;

export const Pokeball = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 60%;
    border: solid 2px #b3b3b3;
    border-radius: 50%;
`;
export const Line = styled.div`
    width: 25%;
    border: solid 1px #b3b3b3;
`;

export const MiniCirclo = styled.div`
    height: 50%;
    width: 50%;
    border: solid 2px #b3b3b3;
    border-radius: 50%;
`


