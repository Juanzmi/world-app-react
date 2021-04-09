import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useForm }  from "react-hook-form";



function App() {
  const [countries, setCountries] = useState([])
  const [inputData, setInputData] = useState("")
  const [print, setPrint] = useState(false)
  const { register, handleSubmit } = useForm();

  //getDataRESTCountries
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  
  /*
  function getInputData(val){
    setInputData(val.target.value)
  }
  */
/*
  const onSubmit = (data) => {
    console.log(data);
  }
*/
  const onSubmit = data => {
    setInputData(data)
    console.log(data);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input class="input100" type="text" 
        placeholder="Population" 
        {...register('population')}
        />
        <input type="submit"/>
      </form>
      <div>
        {
          countries.filter((country)=> {
            if(inputData.population === ""){
              return country
            } else if (country.population >= (inputData.population)){
              return country
            }
          }).map(countries =>            
          <div className='country'>
            <div className='image'>
                <img src={countries.flag} alt="flage"/>
            </div>
            <div className='country-details'>
                <h2>{countries.name}</h2>
                <p>Capital : {countries.capital}</p>
                <p>Region : {countries.region}</p>
                <p>Population : {countries.population}</p>
                <p>Area : {countries.area}</p>
            </div>
          </div>
        )
        }
      </div>
    </div>
    /*
    }
    <div className='container'>
      <div>
        <p>Population more than :  
        <input type="text" onChange={(event) => 
          {
            setInputData(event.target.value)
          }} 
        />
        </p>
        <button onClick={returnDiv}>Submit</button>
      </div>
        {
          countries.filter((country)=> {
            if(inputData == ""){
              return country
            } else if (country.population >= (inputData)){
              return country
            }
          }).map(countries => 
            /*
            <div>
              <ul class="unstyled row-fluid">
                <li class="span3">
                  <div class="round-box round-medium">
                    <span class="box-inner">
                      <img alt="some image" class="img-circle" src={countries.flag}/>
                    </span>
                  </div>
                  <h3 class="text-center">
                  {countries.name}
                  </h3>
                  <p>Capital : {countries.capital}</p>
                  <p>Region : {countries.region}</p>
                  <p>Population : {countries.population}</p>
                  <p>Area : {countries.area}</p>
                </li>              
              </ul>
            </div>
            
            
          <div className='country'>
            <div className='image'>
                <img src={countries.flag} alt="flage"/>
            </div>
            <div className='country-details'>
                <h2>{countries.name}</h2>
                <p>Capital : {countries.capital}</p>
                <p>Region : {countries.region}</p>
                <p>Population : {countries.population}</p>
                <p>Area : {countries.area}</p>
            </div>
          </div>
          
         )
        }
        
    </div>*/
  );
  /*
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(
      (response) => {
        console.log(response.data);
        setCountries(response.data.name);
      }
    )
  }

  const getCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCountries(data.name);
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={getCountries}>
          Get Countries
        </button>
        <div>
        <ul>
            
        </ul>
        </div>
        <p>{countries}</p>

        <p>
          Testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
