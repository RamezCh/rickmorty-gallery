import { useState } from "react";
import response from "./RickAndMortyResponseData.tsx";
import CharacterInfo from "./CharacterInfo.tsx";

function App() {
  const characters = response.results;
  const [name, setName] = useState<string>("");

  const filteredCharacters = name
      ? characters.filter((character) => character.name === name)
      : [];

  return (
      <>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        {!name && characters.map((character) => <CharacterInfo key={character.id} {...character} />)}

        {name && (
            <>
              {filteredCharacters.length > 0 ? (
                  filteredCharacters.map((character) => (
                      <CharacterInfo key={character.id} {...character} />
                  ))
              ) : (
                  <p>No Character found, did you type the name correctly?</p>
              )}
            </>
        )}
      </>
  );
}

export default App;