import { useState } from "react"
import { AddCategoryInput } from "./AddCategoryInput";
import { GifsGrid } from "./GifsGrid";

function GiphyApp() {

  const [category, setCategorie] = useState("");

  const onAddCategory = (category) => {
    setCategorie(category)
  }

  return (
    <>
      <AddCategoryInput onAddCategory = {onAddCategory}/>

      <GifsGrid category={category}/>
    </>
  )
}

export default GiphyApp
