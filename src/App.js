import './App.css';
import styled from 'styled-components';
import NavBar from './components/navbar/NavBar';
import { useState , useEffect} from 'react';
import { Routes , Route  } from 'react-router-dom';
import axios from 'axios';
import Home from './components/home/Home';
import Details from './components/country details/Details';


function App() {
  const [toggeleDarkMode , setToggeleDarkMode] = useState(true)
  const [toggeleRegionBox , setToggeleRegionBox] = useState(false)
  const [inputValue , setInputValue] = useState('');
  const [regionValue , setRegionValue ] = useState('');
  const [data, setData] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    if(inputValue === '' || regionValue === '') {
      setRegionValue('');
      axios.get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setData(res.data);
        setAllCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, []);

  useEffect(() => {
    if (regionValue !== '') {
      axios.get(`https://restcountries.com/v3.1/region/${regionValue}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [regionValue]);

  useEffect(() => {
    if (inputValue === '') {
      setData(allCountries);
      setRegionValue(''); 
    }
  }, [inputValue, allCountries]);

  const getRegions = (e) => {
    setRegionValue(e.nativeEvent.srcElement.innerHTML)
  }

  let filteredCountry = data.filter((country) => (
    country.name.common.toLowerCase().startsWith(inputValue.toLowerCase())
  ))

  const getInputValue = (e) => {
    setInputValue(e.target.value);
    setToggeleRegionBox(false)
  }

  return (
    <div className="App">
        <NavBar ontoggele={() => {setToggeleDarkMode(!toggeleDarkMode)}} DarkMode={toggeleDarkMode} />
        <MainCountryInfo dark={toggeleDarkMode}>
          <Routes>
            <Route 
              path='/'  
              element=
              { 
                <Home 
                  toggeleDarkMode={toggeleDarkMode} 
                  toggeleRegion={() => {setToggeleRegionBox(!toggeleRegionBox)}}
                  toggeleRegionBox={toggeleRegionBox}
                  getInputValue={getInputValue}
                  getRegions={getRegions}
                  inputValue={inputValue}
                  data={data}
                  filteredCountry={filteredCountry}
                /> 
              } 
            />
            <Route 
              path='/:country'  
              element=
              { 
                <Details 
                  toggeleDarkMode={toggeleDarkMode} 
                /> 
              } 
            />
          </Routes>
        </MainCountryInfo>
    </div>
  );
}

const MainCountryInfo =  styled.div`
  background-color: ${(props) => (props.dark ? 'hsl(207, 26%, 17%)' : 'var(--Very-Light-Gray);')};  
  z-index: 2;
`;


export default App;
