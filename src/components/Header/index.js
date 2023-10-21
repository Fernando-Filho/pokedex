"use client"

import { HeaderContainer, Input, Button } from "./style"
import { PokeballContainer, Pokeball, Line, MiniCirclo } from "./pokeball"

const Header = ({searchPokemon, setSearchPokemon}) => {

    return (
        <HeaderContainer>
            <Input  type="text"
                    placeholder="Qual o seu Pokemon preferido?"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}/>
        </HeaderContainer>
    )
}

export default Header;