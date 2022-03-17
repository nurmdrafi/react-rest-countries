import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt="" />
            <h4>Capital: {props.capital ? props.capital : 'No data found'}</h4>
            <h4>Polulation: {props.population}</h4>
        </div>
    );
};

export default Country;