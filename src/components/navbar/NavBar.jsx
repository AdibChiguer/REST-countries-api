import React from 'react'
import styled from 'styled-components';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NightlightSharpIcon from '@mui/icons-material/NightlightSharp';


const NavBar = ({ ontoggele , DarkMode}) => {
  return (
    <Navbar dark={DarkMode} >
      <TitleHead dark={DarkMode}>
        <h1>Where in the world?</h1>
      </TitleHead>
        <DarkModeToggele onClick={ontoggele} dark={DarkMode}>
          {DarkMode ? <NightlightSharpIcon/> : 	<NightlightOutlinedIcon/> } <p>Dark Mode</p>
        </DarkModeToggele>
    </Navbar>
  )
}

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 	0;
  display : flex ;
  align-items : center ;
  justify-content : space-between ;
  padding : 1rem 4rem ;
  background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%)' : 'white')};
  @media only screen and (max-width: 600px) {
    padding : 1rem 2rem ;
  }  
  @media only screen and (max-width: 400px) {
    padding : 1rem ;
  } 
  @media only screen and (width < 1370px) {
    padding : 1rem 3rem ;
  }
`;

const TitleHead = styled.div`
  h1 {
    font-size : 30px ;
    font-weight : 800 ;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size : 20px ;
    }
  } 
  @media only screen and (max-width: 400px) {
    h1 {
      font-size : 15px ;
    }
  } 
`;

const DarkModeToggele = styled.div`
  display : flex ;
  align-items : center ;
  gap : 1rem ;
  user-select: none;
  cursor : pointer ;
  svg {
    transform:  rotate(-45deg);
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
  }
  p {
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
    font-weight : 600 ;
  }
  @media only screen and (max-width: 400px) {
    gap : 0.5rem ;
    svg {
      scale : 0.9;
    }
    p {
      font-size : 13px;
    }
  }
`;


export default NavBar