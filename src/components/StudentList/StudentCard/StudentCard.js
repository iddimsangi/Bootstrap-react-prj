import {ListGroup, Button} from 'react-bootstrap';
import React from 'react';
import './StudentCard.css';
export default function StudentCard() {
    return (
            <div className="Scard" >
                 {/* <Button style={{marginBottom:'10px', float:'right',
                  display:'block',
                  marginBottom:'60px'}} variant="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> Add Student</Button> */}
                <ListGroup
                 style={{border:'1px solid #ccc',
                    display:'block', 
                    marginBottom:'5px',
                    boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                    padding:'2px'}}  variant="flush">
                   <ListGroup.Item  >
                    <svg style={{marginRight:'10px', 
                    color:'green',
                    marginBottom:'-10px'
                    }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <h style={{
                        fontSize:'22px',
                        textTransform:'uppercase'
                        }}>
                    Cras justo odio  
                    <span style={{
                     display:'block',
                     fontFamily:'-moz-initial', 
                     textTransform:'none',
                     fontSize:'16px',
                     fontWeight:'500',
                     color:'green',
                     marginLeft:'60px',
                     marginTop:'-16px'}}>adammsangi@gmail.com</span>          
                    </h>
                   <div style={{float:'right', marginTop:'-45px'}}>
                   <Button variant="primary">Update</Button> 
                   <Button style={{marginLeft:'5px'}}  variant="danger">Delete</Button>
                   </div>
            </ListGroup.Item>                    
            </ListGroup>
           
            </div>
    )
}
