import styled from "styled-components"

export const Button = styled.button`
    position: fixed;
    bottom: 8%;
    right: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgba(13, 17, 22, 0.596);
    color: #ffffff;
    box-shadow: 2px 2px 5px 1px rgb(51, 52, 56, .5);
    
    /* &:hover{
        box-shadow: 2px 2px 5px 1px rgba(14, 116, 232, .8);
    } */
`

export const Link = styled.a`
    color: #ff0000;
`

export const ImageBall = styled.img`
    height: 25px;
    width: 25px;
    color: #fff;
`