import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
export default class AddStudent extends Component {
    state = {
        fullName:"",
        email:""
    }
    addStudent = (e) =>{
        e.preventDefault();
        if(this.state.fullName === "" || this.state.email === ""){
            alert("these fields are mandatory")
            return
        }
        //clear the fields
        this.setState({
            fullName:"",
            email:""
        });
        this.props.addStudentHandler(this.state);
        console.log(this.props);
        this.props.history.push("/");
    }

    render(props) {
        return (
            <div style={{ width:'50%', margin:'40px auto'}}>
                <Form onSubmit={this.addStudent} 
                style={{backgroundColor:'#ccc', 
                       padding:'30px',
                       borderRadius:'5px',
                       boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                       
                       }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Full Name"
                        value={this.state.fullName}
                        onChange={(e) => this.setState({fullName:e.target.value})} />
                       
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        value={this.state.email}
                        placeholder="Enter email" 
                        onChange={(e) => this.setState({email:e.target.value})}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
              </Button>
                </Form>
            </div>
        )
    }
}
