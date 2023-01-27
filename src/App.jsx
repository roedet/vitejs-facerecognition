import React, { Component } from 'react';
import Login from './components/Login/Login';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log('click');
  };

  render() {
    return (
      <div>
        <Login />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <Rank />
        <h1>Hello StackBlithhhhhz!</h1>
      </div>
    );
  }
}
export default App;
