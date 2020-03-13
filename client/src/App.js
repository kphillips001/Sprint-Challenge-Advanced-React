import React from 'react';
import axios from 'axios';

import Cards from './components/Cards';
import Mode from './components/Mode';

import './App.css';

class App extends React.Component {
  state = {
    playerData: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players/')
      .then(res => {
        console.log(res.data);
        this.setState({
          playerData: res.data
        })})
      .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <div data-testid="mode-btn">
        <Mode /> 
      </div>
      
      <div>
        <Cards playerData={this.state.playerData} />
      </div>
    </div>
  );
  }
}

export default App;
