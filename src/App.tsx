import { useState } from "react";
import response from "./RickAndMortyResponseData.tsx";
import CharacterInfo from "./CharacterInfo.tsx";

function App() {
    const characters = response.results;
    const [name, setName] = useState<string>("");
    const [page, setPage] = useState<number>(0);

    const incrementPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const charactersToDisplay = name
        ? characters.filter((character) => character.name === name)
        : characters.slice(page * 5, 5 + page * 5);

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            {charactersToDisplay.length > 0 ? (
                charactersToDisplay.map((character) => (
                    <CharacterInfo key={character.id} {...character} />
                ))
            ) : (
                <p>No Character found, did you type the name correctly?</p>
            )}

            {!name && page != 3 && (
                <button onClick={incrementPage}>Load More</button>
            )}

            {name && <button onClick={() => setName("")}>Reset Search</button>}
        </>
    );
}

export default App;