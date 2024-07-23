import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Cartoon Components.css'

const CartoonComponents = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getDataFromAPI = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      setCharacters(response.data.results);

    };
    getDataFromAPI();
  }, [page]);

  const handleNext = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <div className='container'>
        {characters.map(character => (
          <div key={character.id} className='card'>
            <img src={character.image} alt={character.name} />
            <div className="data">
            <p>{character.name}</p>
            <p>{character.origin.name}</p>
            <p>{character.status}-{character.species}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn1" onClick={handlePrevious} >Previous</button>
      <button className="btn2" onClick={handleNext}>Next</button>
    </React.Fragment>
  );
}

export default CartoonComponents;