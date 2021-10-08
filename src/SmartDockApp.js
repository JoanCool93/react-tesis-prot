import React, { useState } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/home/NavBar';
import { store } from './store';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginScreen } from './components/auth/LoginScreen';
import { RegisterScreen } from './components/auth/RegisterScreen';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export const SmartDockApp = () => {

    const [authFlag, setAuthFlag] = useState(true);

    const handleSwitch = () => {
        setAuthFlag(!authFlag);
    }

    return (
        <Provider store={ store }>
            <NavBar />
            <Container className="bg" fluid>
                <Row className="">
                    <Col xs={8}></Col>
                    <Col xs={3}>
                        <Container className="bg-secondary mt-5">
                            {
                                authFlag ? <LoginScreen/> : <RegisterScreen/>
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Provider>
    )
}
