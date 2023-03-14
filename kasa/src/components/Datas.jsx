import React from "react";

const Datas = () => {
  fetch("/assets/Logements.json")
    .then((res) => res.json())
    .then((Logements) => {
      console.log(Logements);
      console.log(Logements.length);
    })
    .catch((error) => console.error(error));
};

export default Datas;
