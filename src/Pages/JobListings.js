import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'



const JobListings = () => {
    return(
        <Card style={{ width: '50rem' }}>
             <Row>
                  <Dropdown>
                       <Dropdown.Toggle variant="success" id="dropdown-basic">
                       General Desired Skills: 
                      </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Entry</Dropdown.Item>
                        <Dropdown.Item href="#/action-1" >Mid</Dropdown.Item>
                      <Dropdown.Item href="#/action-1" >Senior</Dropdown.Item>
                       <Dropdown.Item href="#/action-1" >All</Dropdown.Item>
                      </Dropdown.Menu>
                 </Dropdown>
        <Col>
            <div className="float-right" style={{ paddingTop: '15px' }}>
                <SearchBar />
            </div>
        </Col>
    </Row>
    </Card>

    );
}

export default JobListings;