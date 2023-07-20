import React from 'react';
import styled from 'styled-components';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Inputs = ({ DarkMode , onRegion , status , oninput , region}) => {
  return (
    <InputsContainer>
      <CountryNameInput dark={DarkMode}>
        <label htmlFor="inputCountryName"><SearchRoundedIcon/></label>
        <input type="text" id='inputCountryName' placeholder='Search for a country...' onChange={oninput} autoComplete="off"/>
      </CountryNameInput>
      <RegionFilter>
        <ButtonRegion dark={DarkMode} onClick={ onRegion }><p>filter by region</p><KeyboardArrowDownIcon/></ButtonRegion>
        { status ? 
          <RegionBox dark={DarkMode}>
            <p onClick={region}>africa</p>
            <p onClick={region}>america</p>
            <p onClick={region}>asia</p>
            <p onClick={region}>europe</p>
            <p onClick={region}>oceania</p>
          </RegionBox> :
          null
        }
      </RegionFilter>
    </InputsContainer>
  )
}

const InputsContainer = styled.div`
  display : flex ;
  align-items : center;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap : 2rem ;
    align-items: start ;
  }
`;

const CountryNameInput = styled.div`
  display: flex ;
  align-items: center;
  background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%);' : 'white;')};  
  width : 28rem;
  padding : 0rem 0.5rem ;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  label {
    display : flex ;
    align-items : center;
    justify-content : center;
    margin-left : 1rem;
    cursor : pointer;
    svg {
      scale : 1.3;
    }
    svg path {
      fill : ${(props) => (props.dark) ? 'white;' : 'var(--Dark-Gray);'}
    }
  }
  input {
    border : none;
    outline: none;
    padding: 1rem;
    width: 100%;
    margin-left: 0.5rem;
    font-size: 15px;
    font-weight : bold;
    background-color : transparent;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Dark-Gray);'}
  }
  input::placeholder {
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Dark-Gray);'}
  }
  @media only screen and (max-width: 800px) {
    width : 100% ;
  }
`;

const RegionFilter = styled.div`
  display : flex ;
  flex-direction : column;
  width : 12rem ; 
  position : relative ;
`;

const ButtonRegion = styled.button`
  display : flex ;
  align-items : center;
  justify-content : space-between;
  padding :  1rem;
  outline : none ;
  border : none ;
  background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%);' : 'white;')};  
  box-shadow : rgba(0, 0, 0, 0.1) 0px 4px 12px ;
  border-radius : 5px ;
  font-weight : bold;
  cursor : pointer;
  color : ${(props) => (props.dark) ? 'white;' : 'var(--Dark-Gray);'}
  text-transform : capitalize ;
  user-select: none;
`

const RegionBox = styled.div`
  position : absolute ;
  background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%);' : 'white;')};  
  width : 100%;
  padding : 1rem ;
  display : flex ;
  flex-direction : column;
  gap : 0.5rem ;
  bottom : -11.5rem ;
  box-shadow : rgba(0, 0, 0, 0.1) 0px 4px 12px ;
  border-radius : 5px ;
  color : ${(props) => (props.dark) ? 'white;' : 'var(--Dark-Gray);'}
  font-weight : bold ;
  p {
    cursor : pointer ;
  }
  z-index : 10;
`;

export default Inputs