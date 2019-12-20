import React from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 200px;
  margin: 10px;
  display: flex;
  h3 {
    color: white;
  }
  a:link {
    text-decoration: none
  }

  a:hover {
    background-color: #0fb6da;
  }

  justify-content: space-between;
  h3 {
    padding: 0 20px;
    font-size: 2rem;
    }
`;

function Nav(props) {
  return (
    <NavContainer>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/characters'><h3>Characters</h3></Link>
    </NavContainer>
  );
}

export default Nav;