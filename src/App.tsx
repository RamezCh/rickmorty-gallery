import CharacterGallery from "./components/CharacterGallery.tsx";
import {characters} from "./RickAndMortyResponseData.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import {AddCharacter} from "./components/AddCharacter";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter";

function App() {
    const [chars, setCharacters] = useState<Character[]>(characters);
    const addCharacter = (newCharacter: Character) => {
        setCharacters([...chars, newCharacter]);
    }
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterGallery characters={chars}/>} />
                <Route path="/add/character" element={<AddCharacter addCharacter={addCharacter}/>} />
                <Route path="/character/:id" element={<CharacterDetailCard characters={chars}/>} />
            </Routes>
        </>
    );
}

export default App;