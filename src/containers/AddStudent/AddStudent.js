import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
export default class AddStudent extends Component {
    render() {
        return (
            <div style={{ width:'50%', margin:'40px auto'}}>
                <Form style={{backgroundColor:'#ccc', padding:'30px', borderRadius:''}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                       
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
              </Button>
                </Form>
            </div>
        )
    }
}
