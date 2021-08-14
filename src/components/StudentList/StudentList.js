import React from 'react'
import StudentCard from './StudentCard/StudentCard'
import {Form,FormControl, Button} from 'react-bootstrap';
function StudentList(props) {
    console.log(props);
    const studentListCard = props.studentsArray.map(studentObj =>{
        return <StudentCard 
        student ={studentObj}
        key={studentObj.id}
        deleteStudent ={() =>props.deleteStudentHandler(studentObj.id)} />
    })
    return (
        <div>
            <div style={{margin:'20px auto', marginLeft:'30%'}}>
            <Form style={{width:'50%'}} className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    value={props.term}
                    onChange={(e) => props.searchKeyTerm(e.target.value)}
                />
                {/* <Button variant="outline-success">Search</Button> */}
             </Form>
             
            {/* <h1 style={{float:'right'}}>Student List</h1> */}
            </div>
             
             {studentListCard}
           
        </div>
    )
}

export default StudentList
