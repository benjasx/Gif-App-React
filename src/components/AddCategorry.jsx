import PropTypes from "prop-types";
import { useState } from "react";

export default function AddCategorry({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onChanged = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    /* setCategories((categories) => [inputValue, ...categories]); */
    onNewCategory(inputValue.trim())
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onChanged}
      />
    </form>
  );
}


AddCategorry.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}