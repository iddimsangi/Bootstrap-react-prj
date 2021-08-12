import React from 'react'
import {Card, Button} from 'react-bootstrap';
import profile from '../../Assets/images.jpeg'
function StudentDetails() {
    return (
        <div style={{marginTop:'20px',
         marginLeft:'35%',
         }}>
        <Card style={{ width: '18rem',boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Card.Img variant="top" src={profile} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go back</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default StudentDetails
