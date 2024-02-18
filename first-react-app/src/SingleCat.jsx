import React from "react";

const SingleCat = ({ id, name, latinName }) => {
  return (
    <li key={id}>
      <div className="cat">
        <h3>{name}</h3>
        <p>Latin Name: {latinName}</p>
      </div>
    </li>
  );
};

export default SingleCat;
