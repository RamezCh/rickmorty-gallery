import { Character } from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import { useState } from "react";

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const [name, setName] = useState<string>("");
    const [page, setPage] = useState<number>(0);

    const incrementPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const decrementPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const charactersToDisplay = name
        ? props.characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
        : props.characters.slice(page * 5, 5 + page * 5);

    const cards = charactersToDisplay.map((character) => (
        <CharacterCard key={character.id} character={character} />
    ));

    return (
        <div>
            <input
                placeholder="Enter the character's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {charactersToDisplay.length > 0 ? (
                <div className="character-gallery">{cards}</div>
            ) : (
                <p>No Character found, did you type the name correctly?</p>
            )}

            {!name && page !== 0 && (
                <button onClick={decrementPage}>Show Previous</button>
            )}

            {!name && page !== 3 && (
                <button onClick={incrementPage}>Load More</button>
            )}

            {name && <button onClick={() => setName("")}>Reset Search</button>}
        </div>
    );
}