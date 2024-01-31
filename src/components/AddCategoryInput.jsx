import { useState } from "react"
import { findAll } from "../dao/GyphyFetch";

export const AddCategoryInput = ({onAddCategory}) => {

    const [valueCategory, setValueCategory] = useState("");

    const onchange = ({ target }) => {
        setValueCategory(target.value)
    }


const onSubmit = async (e) =>{

    e.preventDefault();

    onAddCategory(valueCategory);

    setValueCategory("")
}
    return (
        <form onSubmit={onSubmit} >
        <input
                type="text"
                placeholder="Write something"
                value={valueCategory}
                onChange={onchange}
            />
        </form>
    )
}
