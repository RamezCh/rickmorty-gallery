import {ChangeEvent, FormEvent, useState } from "react";
import { Character } from "../types/RickAndMortyCharacter";
import { useNavigate } from "react-router-dom";
import "./AddCharacter.css";

type AddCharacterProps = {
    addCharacter: (newCharacter: Character) => void;
};

const generateId = () => Math.floor(Math.random() * 1000) + 23;

export const AddCharacter = ({ addCharacter }: AddCharacterProps) => {
    const [character, setCharacter] = useState<Character>({
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: { name: "", url: "" },
        image: ''
    });
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name.startsWith("origin.")) {
            setCharacter(prev => ({
                ...prev,
                origin: { ...prev.origin, [name.split(".")[1]]: value }
            }));
        } else {
            setCharacter(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newCharacter = { ...character, id: generateId() };
        addCharacter(newCharacter);
        navigate("/characters");
    };

    return (
        <form className="add-character-form" onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" name="name" value={character.name} onChange={handleChange} />
            </label>
            <label>Status:
                <input type="text" name="status" value={character.status} onChange={handleChange} />
            </label>
            <label>Species:
                <input type="text" name="species" value={character.species} onChange={handleChange} />
            </label>
            <label>Gender:
                <input type="text" name="gender" value={character.gender} onChange={handleChange} />
            </label>
            <label>Origin Name:
                <input type="text" name="origin.name" value={character.origin.name} onChange={handleChange} />
            </label>
            <label>Origin URL:
                <input type="text" name="origin.url" value={character.origin.url} onChange={handleChange} />
            </label>
            <label>Image URL:
                <input type="text" name="image" value={character.image} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};