import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios'

function App() {

const[name, setName] = useState('')
const[district, setDistrict] = useState('')
const[countrycode, setCountrycode] = useState('')
const[population, setPopulation] = useState('')

const submitData = () => {
 Axios.post("http://localhost:3001/api/insert", {
   name: name, 
   ccity:district, 
   cc:countrycode, 
   pop:population,
   }).then(() => {
     alert('sucessful insert');
   });
};

   return (
   <div className="App">
     <h1>Global Data Finder</h1>
     
     <div className="Information">
     <label> Country Code</label>
     <input 
     type="text" 
     name="countrycode"
     onChange={(e) => {
       setCountrycode(e.target.value); 
     }}
     />

     <label> Country Name</label>
     <input 
     type="text"
     name="name" 
     onChange={(e) => {
       setName(e.target.value);
    }}
    />

     <label> Capital City</label>
     <input 
     type="text" 
     name="district" 
     onChange={(e) => {
       setDistrict(e.target.value); 
     }}
     />

     <label> Population Amount</label>
     <input 
     type="text" 
     name="Population"
      onChange={(e) => {
       setPopulation(e.target.value);
    }}
    />
     

     <button onClick={submitData}>Submit</button>
     </div>
    </div> 

          
   );
  }

export default App;