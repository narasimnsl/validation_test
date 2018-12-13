import React, { Component } from 'react';
import Main from './containers/main'
import{BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    );
  }
}

export default App;
