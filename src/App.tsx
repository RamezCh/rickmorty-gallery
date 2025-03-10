import CharacterGallery from "./components/CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import {AddCharacter} from "./components/AddCharacter";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter";
import axios from "axios";

function App() {
    const [chars, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState<number>(1);

    const incrementPage = () => {
        setPage((prevPage) => prevPage < 42 ? prevPage + 1 : prevPage);
    };

    const decrementPage = () => {
        setPage((prevPage) => prevPage < 2 ? prevPage : prevPage - 1);
    };

    const addCharacter = (newCharacter: Character) => {
        setCharacters([...chars, newCharacter]);
    }

    useEffect(() => {
         axios.get("https://rickandmortyapi.com/api/character/?page=" + page)
            .then( (response) => {
                setCharacters(response.data.results);
            })
             .catch( (err) => {
                 console.log(err);
             })
    }, [page]);

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterGallery characters={chars} handleDecrement={decrementPage} handleIncrement={incrementPage} page={page}/>} />
                <Route path="/add/character" element={<AddCharacter addCharacter={addCharacter}/>} />
                <Route path="/character/:id" element={<CharacterDetailCard characters={chars}/>} />
            </Routes>
        </>
    );
}

export default App;