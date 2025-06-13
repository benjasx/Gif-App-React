import { useState } from "react";
import {AddCategorry, GifGrid} from "./components";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["Naruto"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategorry onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
