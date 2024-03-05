import {Character} from "./characters.ts";
import React from "react";
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        <div>
            <Link to="/">
                <button className="buttons">
                    <span className="text">Go Back</span>
                </button>
            </Link>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
        </div>
    )
}
