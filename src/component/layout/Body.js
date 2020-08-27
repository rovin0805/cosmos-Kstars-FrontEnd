import React from 'react';

import Container from "@material-ui/core/Container";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../../container/login/Login";
import TalkerList from "../../container/main/talker/TalkerList";
import Start from "../../container/start/index";
import ProjectManager from "../../container/start/projectManager";
import HeaderManager from "../../container/start/headerManager";


function Body(props) {
    return (
        <Container maxWidth="lg">
        <div>
            <Container>
                <Route exact path="/login" component={Login} /> {/* 인트로화면 */}
                <Route exact path="/start" component={Start} /> {/*시작화면*/}
                <Route exact path="/start/project" component={ProjectManager} /> {/*ProjectManager 화면*/}
                <Route exact path="/start/header" component={HeaderManager} /> {/*HeaderManager 화면*/}
                <Route exact path="/main" component={TalkerList} /> {/*전사화면*/}

            </Container>
        </div>
        </Container>

    );
}

export default Body;