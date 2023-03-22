
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
        setAlert(null);
    },3000)
  }
  // const [lableText,setlableText]=useState("Enable Dark Mode")

  const togglemode=()=>{
      if(mode === 'light')
      { 
        setMode("dark")
        // setlableText("Enable Light Mode")
        document.body.style.backgroundColor='#052144';
        showAlert("applied dark mode","success");
      }
      
      else
      {
        setMode("light")
        document.body.style.backgroundColor='white';
        // setlableText("Enable Dark Mode")
        showAlert("applied light mode","success");
      }
      
  }

  return (
    <>
    {/* <Router> */}
   <Navbar title="Funkart" about="About" mode={mode} togglemode={togglemode} /> 
   {/* //title and about are props which are added to the navbar compnents */}
   <Alert alert={alert}/>
   <div className='container my-5'>
  
   {/* <Switch>
          <Route exact path="/about">  
          {/* //to terminate partial macthing --->'exact is used' */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */} 
          <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} alert={alert}/>
{/*             
          </Route>
    </Switch> */}

{/*       
     <About/> */}
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;
