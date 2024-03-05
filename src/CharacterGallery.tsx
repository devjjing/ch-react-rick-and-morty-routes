// import {Character, charactersResponse} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import {Link} from "react-router-dom";
import React from "react";
import {Character} from "./characters.ts";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            <Link to="/">
                <button className="buttons">
                    <span className="text">Go Back</span>
                </button>
            </Link>
            <h1>
                Gallery
            </h1>
            {props.characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>

    )
}
