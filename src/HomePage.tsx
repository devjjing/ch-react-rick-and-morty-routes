import './App.css'
import React from "react";
import {Link} from "react-router-dom";

function HomePage() {

    return (
        <>
            <div>
                <h1>Characters from Rick and Morty</h1>
                <h2>Find your favourite character here!</h2>
                <div>
                <Link to="/character/gallery">
                    <button className="buttons">
                        <span className="text">Gallery</span>
                    </button>
                </Link>
                </div>
                <div>
                <Link to="/character/cards">
                    <button className="buttons">
                        <span className="text">Click here to get your random character card!</span>
                    </button>
                </Link>
                </div>
                <div>
                    <Link to="/character/create">
                        <button className="buttons">
                            <span className="text">Click here to create your own Rick and Morty character!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomePage