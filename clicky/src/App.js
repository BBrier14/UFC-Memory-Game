//----- Import -----//
import React, {Component} from 'react';
import Main from './components/main/main';
import Header from './components/header/header'
import './App.css';

//----- Render -----//
class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}


export default App;
