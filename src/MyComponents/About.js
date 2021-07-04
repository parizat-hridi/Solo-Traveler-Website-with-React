import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const About = () => {


    return (
        <div>
            <Card style={{ marginLeft: '60vh', width: '70vh' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/f6/e9/be/f6e9be9a242d9bcc4b2f7bd0523b68ff.jpg" />
                <Card.Body>
                    <Card.Title>Whiteface Mountain</Card.Title>
                    <Card.Text>
                        Whiteface Mountain is the fifth-highest mountain in the U.S. state of New York, and one of the High Peaks of the Adirondack Mountains.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
