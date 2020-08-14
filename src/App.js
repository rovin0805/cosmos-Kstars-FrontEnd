import React, { Component } from 'react'
import {Header, Body, Footer} from "./component/layout/index";
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <Route exact path="/main" component={Header} /> {/*메인화면*/}
        <Body/>
        <Footer/>
      </div>
    )
  }
}
export default App;
