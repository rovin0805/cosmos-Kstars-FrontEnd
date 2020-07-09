import React, { Component } from 'react'

import TalkerList from './Type1/TalkerList';
import HeaderManager from './headerManager/HeaderManager';

class App extends Component {
  render() {
    return (
      <div>

        <HeaderManager/>
        <TalkerList/>
       
      </div>
    )
  }
}
export default App;
