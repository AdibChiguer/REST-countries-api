import React, { useState , useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const Details = ({ toggeleDarkMode , onDetails }) => {

  const { country } = useParams();
  const [details , setDetails] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then((res) => {
      setDetails(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  } , [])

  let firstKey;
  let firstValue;
  let currencies ;

  if(details[0] != null){
    firstKey = Object.keys(details[0]?.languages)[0];
    firstValue = details[0]?.languages[firstKey];
    currencies = Object.keys(details[0]?.currencies)[0]
  }

  return (
    <DetailsContainer dark={toggeleDarkMode}>
      <BackHomeButton dark={toggeleDarkMode}>
        <Link to="/"><ArrowBackRoundedIcon/><p>Back</p></Link>
      </BackHomeButton>
      <ContryInfo>
        <Flag>
          <img src={details[0]?.flags.png} alt={details[0]?.flags.alt} />
        </Flag>
        <Content>
          <CountryName dark={toggeleDarkMode}>
            <h1>{details[0]?.name.common}</h1>
          </CountryName>
          <CountrySubInfo>
            <LeftGrp dark={toggeleDarkMode}>
              <p>Native Name: <span>{details[0]?.name.official}</span></p>
              <p>Population: <span>{details[0]?.population.toLocaleString()}</span></p>
              <p>Region: <span>{details[0]?.region}</span></p>
              <p>Sub Region: <span>{details[0]?.subregion}</span></p>
              <p>Capital: <span>{details[0]?.capital[0]}</span></p>
            </LeftGrp>
            <RightGrp dark={toggeleDarkMode}>
              <p>top level domain: <span>{details[0]?.tld[0]}</span></p>
              <p>currencies: <span>{currencies}</span></p>
              <p>language: <span>{firstValue}</span></p>
            </RightGrp>
          </CountrySubInfo>
          {details[0]?.borders == null 
            ? null : 
            <BorderCountries dark={toggeleDarkMode}>
              <p>Borders countries:</p>
              <BCountries dark={toggeleDarkMode}>
                {details[0]?.borders.map((border) => (
                  <span key={border}>{border}</span>  
                ))}
              </BCountries>
          </BorderCountries>
          }
        </Content>
      </ContryInfo>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
  width: 100%;
  min-height: 100vh ;
  padding : 0rem 4rem ;
  padding-top : 8rem ;
  padding-bottom : 4rem ;
  @media only screen and (max-width: 600px) {
    padding : 0rem 2rem ;
    padding-top : 8rem ;
    padding-bottom : 4rem ;
  } 
  @media only screen and (max-width: 400px) {
    padding : 0rem 2rem ;
    padding-top : 6rem ;
    padding-bottom : 4rem ;
  } 
`

const BackHomeButton = styled.div`
  width: 120px;
  border-radius : 5px;
  background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%);' : 'white;')};  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor : pointer;
  a {
    display: flex;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
    gap : 1rem;
    text-decoration : none;
    padding : 0.5rem 1rem;
  }
`

const ContryInfo = styled.div`
  display : flex ;
  gap : 10rem ;
  padding-top : 3rem ;
  @media only screen and (max-width: 1200px) {
    gap : 7rem ;
  } 
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    gap : 5rem ;
  } 
  @media only screen and (max-width: 400px) {
    flex-deraction : column ;
    gap : 3rem ;
  } 
`

const Flag = styled.div`
  width : 550px;
  height : 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  img {
    width : 100% ;
    height : 100% ;
  }
  @media only screen and (max-width: 1100px) {
    width : 100%;
    height : auto;

  }
  @media only screen and (max-width: 400px) {
    height : 250px;
  } 
`

const Content = styled.div`
  padding : 2rem ;
  @media only screen and (max-width: 700px) {
    padding : 0rem ;
  }
`

const CountryName = styled.div`
  margin-bottom : 2rem ;
  h1 {
    text-transform : capitalize ;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}

  }
`

const CountrySubInfo = styled.div`
  display : flex ;
  gap : 8rem ;
  margin-bottom : 4rem ;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    gap : 3rem ;
    margin-bottom : 3rem ;
  } 
`

const LeftGrp = styled.div`
  p {
    font-weight : 800;
    font-size : 16px; 
    text-transform : capitalize;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
    margin : 0.5rem 0 ;
  }
  p span {
    font-weight : 500;
    opacity : 0.7;
    margin-left : 0.5rem ;
  }
`

const RightGrp = styled.div`
  p {
    font-weight : 800;
    font-size : 16px; 
    text-transform : capitalize;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
    margin : 0.5rem 0 ;
  }
  p span {
    font-weight : 500;
    opacity : 0.7;
    margin-left : 0.5rem ;
  }
`

const BorderCountries = styled.div`
  display : flex ;
  align-items : center ;
  margin-top : 1rem ;
  p {
    margin-right: 2rem ;
    font-weight : 800;
    font-size : 16px; 
    text-transform : capitalize;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
  }
  @media only screen and (max-width: 1100px) {
  align-items : start ;
  gap : 2rem ;
  flex-direction: column;
  } 
`

const BCountries = styled.div`
  display : flex ;
  flex-wrap : wrap ;
  gap : 1rem ;
  span {
    border-radius : 5px;
    background-color: ${(props) => (props.dark ? 'hsl(209, 23%, 22%);' : 'white;')};  
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    color : ${(props) => (props.dark) ? 'white;' : 'var(--Very-Dark-Blue);'}
    padding : 0.5rem 1rem;
  }
`

export default Details