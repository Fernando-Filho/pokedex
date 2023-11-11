import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0%;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 12px;
    height: 10%;
    width: 100%;
    backdrop-filter: blur(8px);
    box-shadow: 0px 0px 5px 1px rgba(51, 52, 56, .4);
`

export const Input = styled.input`
    transition: .5s;
    height: 50px;
    width: 350px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: rgba(179, 179, 179, 1);
    color: #000000;
    box-shadow: 2px 2px 5px 1px rgb(51, 52, 56, .5);

    &::placeholder{
        color: rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 425px){
        width: 250px;
    }
`

export const Button = styled.button`
    transition: .5s;
    height: 50px;
    width: 50px;
    border-radius: 8px;
    background-color: rgba(179, 179, 179, 1);
    box-shadow: 2px 2px 5px 1px rgb(51, 52, 56, .5);

    &:hover{
        box-shadow: 0px 0px 20px 5px ${(props) => props.$backgroundcolorbytype || rgba(179, 179, 179, 0.4)};
    }
`

export const ImageButton = styled.img`
    height: 25px;
    width: 25px;
`

export const SelectContainer = styled.div`
    &:select{
        background-color: red;
    }
`