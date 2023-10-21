"use client"

import { HeaderContainer, Input, Button } from "./style"
import { PokeballContainer, Pokeball, Line, MiniCirclo } from "./pokeball"

const Header = ({handlePokemon}) => {
    return (
        <HeaderContainer>
            <Input type="text"/>

            <Button onClick={handlePokemon}>
                <PokeballContainer>
                    <Pokeball>
                        <Line/>
                        <MiniCirclo/>
                        <Line/>
                    </Pokeball>
                </PokeballContainer>
            </Button>
        </HeaderContainer>
    )
}

export default Header;