import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm'
import styled from 'styled-components';

const ListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
`;



export default function CharacterList({characters}) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    const results = characters.filter( character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())});

    setSearchResults(results);
  }, [searchTerm])

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange} value={searchTerm}/>
      <ListContainer>
        {searchResults.length > 0 ?
             searchResults.map( (character) => (
            <CharacterCard key={character.id} character={character}/>
        )):
            characters.map( character => (
              <CharacterCard key={character.id} character={character}/>
            ))}
      </ListContainer>
    </div>
  );
}