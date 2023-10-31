"use client"

import { HeaderContainer, Input, Button } from "./style"

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