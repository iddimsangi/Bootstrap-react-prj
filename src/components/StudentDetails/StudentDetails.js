import React from 'react'
import {Card, Button} from 'react-bootstrap';
import profile from '../../Assets/images.jpeg'
import { Link } from "react-router-dom";
function StudentDetails(props) {
    console.log(props.history.location.state.students);
const{email, fullName, id} = props.history.location.state.students;
    return (
        <div style={{marginTop:'20px',
         marginLeft:'35%',
         }}>
        <Card style={{ width: '18rem',boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Card.Img variant="top" src={profile} />
            <Card.Body>
                <Card.Title style={{textTransform:'uppercase'}}>
                    {fullName}</Card.Title>
                <Card.Text>
                Go direct to <span style={{color:'green'}}>{email}</span> and book me for xaxaasgashshhshahhsashkjkkjhshasjHAJHKJHKA
                </Card.Text>
                <Link to="/">
                <Button variant="primary">Go back</Button>
                </Link>
                
            </Card.Body>
        </Card>
        </div>
    )
}

export default StudentDetails
