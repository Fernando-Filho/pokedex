import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 5%;
    width: 100%;
    backdrop-filter: blur(8px);
    box-shadow: 0px 0px 5px 1px rgb(51, 52, 56, .4);
`
export const Copyright = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 100%;
    width: 100%;
    color: #ffffff;
    font-size: 16px;

`
export const Link = styled.a`
    color: #ffffff;
`