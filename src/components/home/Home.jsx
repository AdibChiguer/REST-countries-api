import React from 'react'
import styled from 'styled-components';
import NotFound from '../notfound/NotFound';
import Inputs from '../inputs/Inputs';
import CountryBox from '../country/CountryBox';



const Home = ({ toggeleDarkMode , toggeleRegion , toggeleRegionBox , getInputValue , getRegions , inputValue , data , filteredCountry }) => {
  return (
    <div>
      <SearchBox>
            <Inputs 
              DarkMode={toggeleDarkMode} 
              onRegion={() => { toggeleRegion() }} 
              status={toggeleRegionBox} 
              oninput={(e) => { getInputValue(e) }}
              region={(e)=> {  getRegions(e)  }}
            />
          </SearchBox>
          <div className="country-container"> 
            {inputValue === ''
              ? data.map((country, index) => (
                  <CountryBox 
                    key={index} 
                    DarkMode={toggeleDarkMode} 
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={Array.isArray(country.capital) ? country.capital[0] : ''}
                  />
                ))
              : filteredCountry.length === 0
              ? <NotFound DarkMode={toggeleDarkMode} />
              : filteredCountry.map((country, index) => (
                  <CountryBox 
                    key={index} 
                    DarkMode={toggeleDarkMode} 
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={Array.isArray(country.capital) ? country.capital[0] : ''}
                  />
                ))
            }
          </div>
    </div>
  )
}

const SearchBox =  styled.div`
  padding : 0rem 4rem ;
  padding-top : 8rem ;
  @media only screen and (max-width: 600px) {
    padding : 0rem 2rem ;
    padding-top : 6rem ;
  } 
  @media only screen and (max-width: 400px) {
    padding : 0rem 1rem ;
    padding-top : 5rem ;
  }
  @media only screen and (width < 1370px) {
    padding : 0rem 3rem ;
    padding-top : 6rem ;
  }
`;

export default Home