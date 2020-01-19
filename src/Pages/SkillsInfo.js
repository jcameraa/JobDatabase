import React, { Component } from 'react';
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import SearchBar from './SearchBar.js';
import Skills from './SideSkills.js';
import Card from 'react-bootstrap/Card';
import JobListings from './JobListings';
import '../StyleSheets/skillsInto.css';
import PlaceHolderGraph from '../Images/Placeolder_Graph.jpeg'


class SkillsInfo extends Component{
    render() {
        return (
            /*
            <header>
             <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            General Desired Skills: 
        </Dropdown.Toggle>

        <Dropdown.Menu>
         <Dropdown.Item /*href="#/action-1" >Entry</Dropdown.Item>
         <Dropdown.Item /*href="#/action-1" >Mid</Dropdown.Item>
         <Dropdown.Item /*href="#/action-1" >Senior</Dropdown.Item>
         <Dropdown.Item /*href="#/action-1" >All</Dropdown.Item>
         </Dropdown.Menu>
        </Dropdown>
            </header>
            */

            <div>
                <Container fluid = "true">
                <Row>
                        <Col>
                            <div className="float-right" style={{ paddingTop: '15px' }}>
                                <SearchBar />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={true} xl={3}>
                            <div className="spacer">
                                <Skills />
                            </div> 
                        </Col>
                        <Col xs={12} sm={true} xl={6}>
                            <div className="spacer" />
                            <Card style={{ width: '90%', paddingBottom: '15px'  }}>
                                <Card.Img variant="top" src={PlaceHolderGraph} />
                                <Card.Body>
                                    <Card.Title>TThis is data</Card.Title>
                                    <Card.Text>
                                        Explination of Data B:AHHHHH 
                                         </Card.Text>
                                </Card.Body>
                            </Card>

                        <Col xs={12} sm={true} xl={3}></Col>
                            <Row>
                                <div>
                                    <JobListings />
                                </div>

                            </Row>

                        </Col>
                    </Row>


                   
                    



                </Container>
            </div>


        );
    }






}

export default SkillsInfo; 