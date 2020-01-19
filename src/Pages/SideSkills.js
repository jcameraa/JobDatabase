import React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const SideBar = () => {
    return (
        <div>
            <Card style={{ width: '15.25rem' }}>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/engineering`}>Engineering</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/art`}>Art</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/sound`}>Sound Design</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/music`}>Music</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/marketing`}>Marketing</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/design`}>Design</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/production`}>Production</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/business`}>Business</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/QA`}>Quality Assurance</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/IT`}>IT</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/community`}>Community</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/writing`}>Writing</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SideBar;