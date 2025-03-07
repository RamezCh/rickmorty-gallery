import { useParams } from "react-router-dom";
import { Character } from "../types/RickAndMortyCharacter.ts";

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterDetailCard(props: Readonly<CharacterGalleryProps>) {
    const params = useParams();
    const id: string | undefined = params.id;


    const character: Character | undefined = props.characters.find(char => char.id.toString() === id);

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