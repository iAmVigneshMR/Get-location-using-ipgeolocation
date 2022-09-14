import React, { Component } from 'react';
import './App.css';
import GeoLocation from './component/Geolocation';
import Geolocation2 from './component/Geolocation2';
import Geolocation3 from './component/Geolocation3';

class App extends Component {
  render() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)  //to get the timezome area
    return (
      <div>
        {/* <GeoLocation />  */}
        {/* <Geolocation2 />  */}
        <Geolocation3 /> 
      </div>
    );
  }
}

export default App;
