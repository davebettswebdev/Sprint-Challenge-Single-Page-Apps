import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form onSubmit={props.onSubmit}>
        <label htmlFor='search'>Search: </label>
        <input 
          type='text'
          name='search'
          id='search'
          placeholder='Who you lookin for?'
          onChange={props.onChange}
          value={props.value}
          />
      </form>
    </section>
  );
}