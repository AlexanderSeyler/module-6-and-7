import React, { useState } from "react";

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Latin Name:
        <input
          type="text"
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
