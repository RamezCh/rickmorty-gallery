import CharacterGallery from "./components/CharacterGallery.tsx";
import {characters} from "./RickAndMortyResponseData.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters}/>} />
                <Route path="/character/:id" element={<CharacterDetailCard/>} />
            </Routes>
        </>
    );
}

export default App;