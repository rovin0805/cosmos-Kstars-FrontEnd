import React, { Component } from 'react'
import {Header, Body, Footer} from "./component/layout/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
export default App;
