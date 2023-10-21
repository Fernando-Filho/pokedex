import { Button, Link, ImageBall } from "./styled";

const HomePageButton = () => {
    return(
        <Button>
            <Link href="#">
                <ImageBall src="PokeBallButton.png" alt={`Imagem de uma Pokebola.`}/>
            </Link>
        </Button>
    )
}

export default HomePageButton;