import React from 'react';
import './App.css'
import Header from './components/Header';

class App extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }


  render(){
    return(
      <div>
        <h1>Meme Generator</h1>
        <Header />
      </div>
    );
  }

}

export default App;
