import React from "react";
import BigCats from "./BigCats";

const cats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus" },
  { name: "Cougar", latinName: "Puma concolor" },
  { name: "Jaguar", latinName: "Panthera onca" },
  { name: "Leopard", latinName: "Panthera pardus" },
  { name: "Lion", latinName: "Panthera leo" },
  { name: "Snow leopard", latinName: "Panthera uncia" },
  { name: "Tiger", latinName: "Panthera tigris" },
];

const Cat = () => {
  return (
    <div className="cat">
      <BigCats cats={cats} />
    </div>
  );
};

export default Cat;
