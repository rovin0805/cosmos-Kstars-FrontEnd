import React, { Component } from 'react'

import TalkerList from './Type1/TalkerList';
import Charts from './Type2/Charts';

class App extends Component {
  render() {
    return (
      <div>
        <TalkerList/>
        {/* <Charts/> */}
      </div>
    )
  }
}
export default App;
