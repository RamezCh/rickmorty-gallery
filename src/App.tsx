import { useState } from "react";
import CharacterGallery from "./components/CharacterGallery.tsx";
import {characters} from "./RickAndMortyResponseData.tsx";

function App() {
    const [name, setName] = useState<string>("");
    const [page, setPage] = useState<number>(0);

    const incrementPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const decrementPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const charactersToDisplay = name
        ? characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
        : characters.slice(page * 5, 5 + page * 5);

    return (
        <>
            <input placeholder="Enter the character's name" value={name} onChange={(e) => setName(e.target.value)} />

            {charactersToDisplay.length > 0 ? (
                    <CharacterGallery characters={charactersToDisplay} />
            ) : (
                <p>No Character found, did you type the name correctly?</p>
            )}

            {!name && page != 0 && (
                <button onClick={decrementPage}>Show Previous</button>
            )}

            {!name && page != 3 && (
                <button onClick={incrementPage}>Load More</button>
            )}

            {name && <button onClick={() => setName("")}>Reset Search</button>}
        </>
    );
}

export default App;