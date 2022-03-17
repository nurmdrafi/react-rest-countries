import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      {
          countries.map(country => <Country name={country?.name?.common} capital={country?.capital?.[0]} image={country?.flags?.png} population={country?.population} ></Country>)
      }
    </div>
  );
};

export default Countries;
