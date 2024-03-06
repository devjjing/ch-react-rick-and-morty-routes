import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import HomePage from "./HomePage.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import CharacterCard from "./CharacterCard.tsx";
import CharacterCreate from "./CharacterCreate.tsx";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";



function App() {

    const [characters] = useState<Character[]>(charactersResponse.results)
    const [randomCharacterIndex, setRandomCharacterIndex] = useState<number | null>(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        setRandomCharacterIndex(randomIndex);
    }, [characters]);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="character" element={<HomePage/>}/>
                <Route path="character/cards" element={<CharacterCard character={characters[randomCharacterIndex!]} />} />
                <Route path="character/gallery" element={<CharacterGallery characters={charactersResponse.results} />} />
                <Route path="character/create" element={<CharacterCreate/>} />
            </Routes>
        </>
    )
}


export default App
