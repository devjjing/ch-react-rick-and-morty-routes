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
        </div>
    )
}

export default CharacterCreate;