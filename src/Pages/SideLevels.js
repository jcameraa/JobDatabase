import React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const SideLevels = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/entry`}>Entry</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/junior`}>Junior</Link>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/senior`}>Senior</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SideLevels;