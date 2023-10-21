import { FooterContainer, Copyright, Link } from './styled'

const Footer = () => {

    return( 
        <FooterContainer>
            <Copyright> 
                Developed by
                <Link href="https://www.github.com/Fernando-Filho" target='_BLANK'>Fernando Filho</Link>
            </Copyright>
        </FooterContainer>
        )
}

export default Footer;