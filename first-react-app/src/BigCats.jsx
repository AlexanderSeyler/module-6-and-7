import React, { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const BigCats = ({ cats }) => {
  const [catList, setCatList] = useState(cats);

  const sortAlphabetically = () => {
    const sortedCats = [...catList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatList(sortedCats);
  };

  const reverseList = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
  };

  const filterPantheraFamily = () => {
    const pantheraCats = catList.filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setCatList(pantheraCats);
  };

  const resetList = () => {
    setCatList(cats);
  };

  const addCat = (newCat) => {
    setCatList([...catList, newCat]);
  };

  const deleteCat = (id) => {
    const updatedCats = catList.filter((cat, index) => index !== id);
    setCatList(updatedCats);
  };

  return (
    <div className="big-cats">
      <h2>Big Cats</h2>
      <div className="buttons">
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPantheraFamily}>Filter Panthera Family</button>
        <button onClick={resetList}>Reset List</button>
      </div>
      <AddCatForm onAddCat={addCat} />
      <ul>
        {catList.map((cat, index) => (
          <div key={index}>
            <SingleCat id={index} name={cat.name} latinName={cat.latinName} />
            <button onClick={() => deleteCat(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
