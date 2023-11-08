"use client"

import { HeaderContainer, Input, Button, ImageButton } from "./style"

const Header = ({searchPokemon, setSearchPokemon, handlePokemonByType}) => {
    

    return (
        <HeaderContainer>
            <Input  type="text"
                    placeholder="Qual o seu Pokemon preferido?"
                    value={searchPokemon}
                    onChange={(e) => setSearchPokemon(e.target.value)}/>

            <Button $backgroundcolorbytype={"var(--"+searchPokemon.toLowerCase()+")"}
                    onClick={handlePokemonByType}/>
        </HeaderContainer>
    )
}

export default Header;