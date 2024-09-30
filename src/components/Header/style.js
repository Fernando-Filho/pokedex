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
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 5px 1px rgba(50, 50, 5, .4);
`

export const ImagePokeBoll = styled.img`
    height: 40px;
    width: 40px;
    float: left;
    opacity: .9;
    cursor: pointer;
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

export const SelectContainer = styled.select`
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: rgba(179, 179, 179, 1);
    color: #000000;
    box-shadow: 2px 2px 5px 1px rgb(51, 52, 56, .5);
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    cursor: pointer;
`