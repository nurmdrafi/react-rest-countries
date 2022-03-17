import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, capital, population } = props.country;
  console.log(props.country);
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" style={{ width: "50px" }} />
      <h4>Capital: {capital?.[0] ? capital[0] : "No data found"}</h4>
      <h4>Polulation: {population}</h4>
    </div>
  );
};

export default Country;
