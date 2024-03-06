import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

type FormInputType = {
    isAlive?: string
    name: string
    species: string
    type: string
}
function CharacterCreate() {
    const [form, setForm] = useState<FormInputType>({
        isAlive : "",
        name: "",
        species: "",
        type: "",
    })

    const onChangeValues = (name: string, value: string | number | boolean) => {
        const newValues: FormInputType = {
            ...form,
            [name]: value
            };
        setForm(newValues);
    }

    const [createdCharacter, setCreatedCharacter] = useState<FormInputType | null>(null);


    return (
        <div>

            <Link to="/">
                <button className="buttons">
                    <span className="text">Go Back</span>
                </button>
            </Link>

            <p>
               CharacterCreationForm
            </p>

            <form onSubmit={(event) => {
              event.preventDefault();
              console.log(form)
                setCreatedCharacter(form);
            }}>
                <div>
                    <label>Name:
                        <input type="text" name="name" onChange={(e) => {
                            onChangeValues(e.target.name, e.target.value);
                        }} />
                    </label>
                </div>
                <div>
                    <label>
                        Alive?:
                        <input type="checkbox" name="isAlive" onChange={(e) => {
                            onChangeValues(e.target.name, e.target.checked);
                        }} />
                    </label>
                </div>
                <div>
                    <label>
                        Species:
                        <input type="text" name="species" onChange={(e) => {
                            onChangeValues(e.target.name, e.target.value);
                        }} />
                    </label>
                </div>
                <div>
                    <label>
                        Type:
                        <input type="text" name="type" onChange={(e) => {
                            onChangeValues(e.target.name, e.target.value);
                        }} />
                    </label>
                </div>
                    <input type="submit" value="Save" />
            </form>

            {createdCharacter && (
                <div>
                    <p>Your Character:</p>
                    <ul>
                        <li>Name: {createdCharacter.name}</li>
                        <li>Alive: {createdCharacter.isAlive ? "Yes" : "No"}</li>
                        <li>Species: {createdCharacter.species}</li>
                        <li>Type: {createdCharacter.type}</li>
                    </ul>
                </div>
            )}

        </div>

    )
}

export default CharacterCreate;