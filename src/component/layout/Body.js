import React from 'react';

import Container from "@material-ui/core/Container";
import { BrowserRouter, Route } from "react-router-dom";

import Intro from "../../container/intro/Intro";

import GuestProjectManager from "../../container/guestProjectManager/index";
import MainPage from "../../container/projectMain/MainPage";
import TalkerList from "../../Type1/TalkerList";

function Body(props) {
    return (
        <Container maxWidth="lg">
        <div>
            <Container>

                <Route exact path="/" component={Intro} /> {/* 인트로화면 */}
                <Route exact path="/guest" component={GuestProjectManager} /> {/*메인화면*/}
                <Route exact path="/main" component={TalkerList} /> {/*메인화면*/}

            </Container>
        </div>
        </Container>

    );
}

export default Body;