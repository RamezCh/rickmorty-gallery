import { useParams } from "react-router-dom";
import { characters } from "../RickAndMortyResponseData.tsx";
import { Character } from "../types/RickAndMortyCharacter.ts";

export default function CharacterDetailCard() {
    const params = useParams();
    const id: string | undefined = params.id;


    const character: Character | undefined = characters.find(char => char.id.toString() === id);

    if (!character) {
        return <div>Character not found!</div>;
    }

    return (
        <div className="character-detail">
            <img className="character-image" src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    );
}