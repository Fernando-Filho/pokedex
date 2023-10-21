import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items:center;
    justify-content: center;
    height: 10%;
    width: 100%;
`

export const Input = styled.input`
    transition: .2s;
    height: 50px;
    width: 350px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 16px;
    background-color: #333438;
    color: #ffffff;
    box-shadow: 2px 2px 5px 1px rgb(51, 52, 56, .5);

        &::placeholder{
            color: rgba(179, 179, 179, 0.4);
        }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    height: 50px;
    width: 50px;
    border-radius: 8px;
    background-color: rgb(14, 115, 232);
    color: #ffffff;
    box-shadow: 2px 2px 5px 1px rgb(51, 52, 56, .5);
    
    &:hover{
        box-shadow: 0px 2px 15px 1px rgba(14, 116, 232, .8);
    }
`