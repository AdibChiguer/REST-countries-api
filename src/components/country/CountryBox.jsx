import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CountryBox = ({ DarkMode , capital , region , population , name , flag }) => {
  return (
    <Country className='country_container' dark={DarkMode}>
      <Link to={`/REST-countries-api/countryDetails/${name}`}>
        <ImgContainer className="country_box-flag" url={flag} >
        </ImgContainer>
        <BoxInfo className="country_box-info" >
          <CountryName className="country_name" dark={DarkMode}>
            <h2>{name}</h2>
          </CountryName>
          <CountryInfo className="country_info" dark={DarkMode}>
            <p>population: <span>{population.toLocaleString()}</span></p>
            <p>region: <span>{region}</span></p>
            <p>capital: <span>{capital}</span></p>
          </CountryInfo>
        </BoxInfo>
      </Link>
    </Country>
  )
}

const Country = styled.div`
  display : flex;
  flex-direction : column;
  width : 20% ;
  min-width : 280px;
  max-height: 400px;
  margin: 2rem;
  border-radius : 5px;
  overflow : hidden;
  background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%);' : 'white;')};  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor : pointer;
  a {
    text-decoration: none;

  }
  @media only screen and (width < 1370px) {
    margin: 2rem 1.2rem;
  }
` 

const ImgContainer = styled.div`
  width : 100%;
  height : 160px ;
  background-image : ${(props) => (`url(${props.url})`)} ;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

const BoxInfo = styled.div`
  padding : 1rem ;
  width: 100%;
`

const CountryName =  styled.div`
  margin-bottom : 1rem;
  h2 {
    font-weight : 800;
    text-transform : capitalize;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
  }
`

const CountryInfo = styled.div`
  margin-bottom : 1rem;
  p {
    font-weight : 800;
    font-size : 16px; 
    text-transform : capitalize;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
  }
  p span {
    font-weight : 500;
  }
`

export default CountryBox