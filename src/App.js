import React from 'react';
import './App.css';
import Appbar from './main';
import Team from './team';
import Aa from './aa';
import Best from './best';
import MainPicture from './MainPicture';
import WESIX_INTRO from './Text';
import Route from './route';
import Contact from './Contact';
import Activity_board from './Activity_board';
function App() {
  return (
    <div className="App">
      <Appbar/> 
      <div>
      <MainPicture/>
      </div>
      <div className="mid">
        <WESIX_INTRO/>
        <Activity_board/>
      </div>
      <div>
        <Team/>
        <Route/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
