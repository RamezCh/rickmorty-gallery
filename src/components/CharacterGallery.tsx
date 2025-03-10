import "./CharacterGallery.css";
import { Character } from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import {MouseEventHandler, useState} from "react";

type CharacterGalleryProps = {
    characters: Character[];
    handleIncrement: MouseEventHandler<HTMLButtonElement>;
    handleDecrement: MouseEventHandler<HTMLButtonElement>;
    page: number;
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const [name, setName] = useState<string>("");

    const charactersToDisplay = name
        ? props.characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
        : props.characters;

    const cards = charactersToDisplay.map((character) => (
        <CharacterCard key={character.id} character={character} />
    ));

    return (
        <div>
            <label>Search (If you can't find the character, try flipping through the page):</label>
            <input
                style={{ marginLeft: "20px" }}
                placeholder="Enter the character's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {charactersToDisplay.length > 0 ? (
                <div className="character-gallery">{cards}</div>
            ) : (
                <p>No Character found, did you type the name correctly?</p>
            )}

            {!name && <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "88%", gap: "10px", marginTop: "20px" }}>
                <button onClick={props.handleDecrement} disabled={props.page < 2}>Show Previous</button>
                <button onClick={props.handleIncrement} disabled={props.page > 41}>Load More</button>
            </div>}


            {name && <button onClick={() => setName("")}>Reset Search</button>}
        </div>
    );
}