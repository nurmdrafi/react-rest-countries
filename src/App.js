import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries>
        <Country></Country>
      </LoadCountries>
    </div>
  );
}

/* // Create functinal component

// Step 01 - Create functional component
function LoadCountries() {
  // Step 02 - useState
  const [countries, setCountries] = useState([]); // [state variable, state f()]
  // Step 03 - useEffect
  // useEffect(() =>{} [])
  useEffect(() => {
    // Step 04 - fetch api
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setCountries(data)); // data pass to the state function
  }, []);

  // Step 05 - Create Parent Component
  return (
    <div>
      <h1>Visiting Every country of the world!!!</h1>
      <div>
      // Step 06 - use array.map and set attribute/property + optional chaining
        {countries.map((country) => (
          <Country
            name={country?.name}
            capital={country?.capital?.[0]}
            image={country?.flags?.png}
            population={country?.population}
          ></Country>
        ))}
      </div>
    </div>
  );
}
// Step 07 - Create child component
function Country(props) {
  return (
    <div className="countries">
      <h2 style={{display: 'inline', paddingRight: '10px'}}>{props.name.common}</h2>
      <img src={props.image ? props.image : 'https://picsum.photos/200/300?random=1'} style={{width: '30px', display: 'inline'}}></img>
      <h4>Capital: {props.capital ? props.capital : "No Data Found"}</h4>
      <h4>Population: {props.population}</h4>
    </div>
  );
}
 */
export default App;
