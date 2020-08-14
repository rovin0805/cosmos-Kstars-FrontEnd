import React from 'react';

import Container from "@material-ui/core/Container";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../../container/login/login";
import TalkerList from "../../container/main/Type1/TalkerList";
import Start from "../../container/start/index";
import ProjectManager from "../../container/start/projectManager";
import HeaderManager from "../../container/start/headerManager";
import MainPage from "../../container/main/MainPage";


function Body(props) {
    return (
        <Container maxWidth="lg">
        <div>
            <Container>

                <Route exact path="/login" component={Login} /> {/* 인트로화면 */}
                <Route exact path="/start" component={Start} /> {/*메인화면*/}
                <Route exact path="/start/project" component={ProjectManager} /> {/*ProjectManager 화면*/}
                <Route exact path="/start/header" component={HeaderManager} /> {/*HeaderManager 화면*/}
                <Route exact path="/main" component={TalkerList} /> {/*메인화면*/}

            </Container>
        </div>
        </Container>

    );
}

export default Body;