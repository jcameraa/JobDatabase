import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Skills from './SideSkills.js';
import Levels from './SideLevels.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Icon from '../Images/icon.png'

import '../StyleSheets/home.css';



class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid="true">
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
                            <Card style={{ width: 'auto', paddingBottom: '30px'  }}>
                                <Card.Img variant="top" src={Icon} />
                                <Card.Body>
                                    <Card.Title>Lorem ipsum</Card.Title>
                                    <Card.Text>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas. Convallis a cras semper auctor. Nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Eu consequat ac felis donec. Integer enim neque volutpat ac tincidunt vitae.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={true} xl={3}>
                            <div className="float-right spacer">
                                <Levels />
                            
                                <div className="bottom-right" style={{ paddingTop: '30px', paddingBottom: '30px' }}>

                                    <a href="/Contact">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Text className="text-center">
                                                    Don't see your company here? <br /> Contact us!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;