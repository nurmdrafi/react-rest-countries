import React from "react";
import './Country.css'

const Country = (props) => {
  return (
    <div className="country">
      <h2>{props.name}</h2>
      <img src={props.image} alt="" style={{width: '50px'}}/>
      <h4>Capital: {props.capital ? props.capital : "No data found"}</h4>
      <h4>Polulation: {props.population}</h4>
    </div>
  );
};

export default Country;
