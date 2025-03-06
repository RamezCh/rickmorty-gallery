type Info = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string
}

const CharacterInfo = (props:Info) => {
    return <>
        <h1>Hello, I'm {props.name}</h1>
        <p>Gender: {props.gender}</p>
        <p>I'm {props.status} and my species is {props.species}.</p>
    </>
};

export default CharacterInfo;