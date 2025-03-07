import {FormEvent, useState } from "react";
import { Character } from "../types/RickAndMortyCharacter.ts"
import { useNavigate } from "react-router-dom";

type AddCharacterProps = {
    addCharacter: (newCharacter: Character) => void
}

const generateId = () => Math.random() * 1000 + 23;

export const AddCharacter = (props: AddCharacterProps) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [origin, setOrigin] = useState({'name': '', 'url': ''});
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            const id = generateId();
            const newCharacter = {
                id, name, status, species, gender, origin
            }
            props.addCharacter(newCharacter);
            navigate("/characters")
    }

    return <form onSubmit={handleSubmit}>
        <label>Name:
            <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </label>
        <label>Status:
            <input
                type="text"
                value={status}
                onChange={event => setStatus(event.target.value)}
            />
        </label>
        <label>Species:
            <input
                type="text"
                value={species}
                onChange={event => setSpecies(event.target.value)}
            />
        </label>
        <label>Gender:
            <input
                type="text"
                value={gender}
                onChange={event => setGender(event.target.value)}
            />
        </label>
        <label>Origin Name:
            <input
                type="text"
                value={origin.name}
                onChange={event => setOrigin({...origin, 'name': event.target.value})}
            />
        </label>
        <label>Origin URL:
            <input
                type="text"
                value={origin.url}
                onChange={event => setOrigin({...origin, 'url': event.target.value})}
            />
        </label>
        <button>Submit</button>
    </form>
}