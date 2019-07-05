import React from "react";
import './App.css';
import "semantic-ui-react";
import Reservation from './reservation'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
class App extends React.Component {
  render(){
    return(
      <Reservation></Reservation>
    )
  }
}

export default App;
