import React from 'react'
import StudentCard from './StudentCard/StudentCard'
import {Form,FormControl, Button} from 'react-bootstrap';
function StudentList() {
    return (
        <div>
            <div style={{margin:'20px auto', marginLeft:'30%'}}>
            <Form style={{width:'50%'}} className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
             </Form>
             
            {/* <h1 style={{float:'right'}}>Student List</h1> */}
            </div>
             
             <StudentCard />
             <StudentCard />
             <StudentCard />
        </div>
    )
}

export default StudentList
