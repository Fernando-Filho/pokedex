import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

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
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-between; */
        height: 100vh;
        width: 100%;
        background-color: #b3b3b3;
        user-select:none;
    }
    
    button{
        cursor: pointer;
    }
`
export default GlobalStyle