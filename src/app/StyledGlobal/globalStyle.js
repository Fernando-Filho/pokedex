import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    html{
        scroll-behavior: smooth;
    }

    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }
    *:focus{
        outline: none;
    }

    :root{
        user-select: none;

        --water: rgba(104, 144, 240, 1);
        --fire: rgba(240, 80, 48, 1);
        --grass: rgba(120, 200, 80, 1);
        --electric: rgba(248, 208, 48, 1);
        --psychic: rgba(248, 88, 136, 1);
        --ice:rgba(152, 216, 216, 1);
        --dragon: rgba(112, 56, 248, 1);
        --dark: rgba(112, 88, 72, 1);
        --normal: rgba(158, 158, 91, 1);
        --fighting: rgba(144, 48, 40, 1);
        --flying: rgba(168, 144, 240, 1);
        --poison: rgba(160, 64, 160, 1);
        --ground: rgba(224, 192, 104, 1);
        --rock: rgba(184, 160, 56, 1);
        --ghost: rgba(112, 88, 152, 1);
        --steel: rgba(184, 184, 208, 1);
        --bug: rgba(47, 202, 93, 1);
        --fairy: rgba(238, 153, 172, 1);
    }
    
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: rgba(15, 15, 15, 0.725);
        user-select:none;
    }
    
    button{
        cursor: pointer;
    }
`
export default GlobalStyle