
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import FirstLink from './components/FirstLink';
import SecondLink from './components/SecondLink';
import ThirdLink from './components/ThirdLink';


function App() {
 const[toggle, setToggle]=useState(false)
 
 
 const openLinks=()=>{
  setToggle(!toggle)
 }
 
  return (
    <div className="App">
       <Navbar openLinks={openLinks} toggle={toggle}></Navbar>
       
      
      <div className="container">
        <Routes>
        <Route path='/first' element={<FirstLink/>} />
        <Route path='/second' element={<SecondLink/>} />
        <Route path='/third' element={<ThirdLink/>} />
       </Routes>
      </div>
       

       
       


    </div>
  );
}

export default App;
