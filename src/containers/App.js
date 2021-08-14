import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container} from 'react-bootstrap'
import Header from '../components/Header/Header'
import AddStudent from '../containers/AddStudent/AddStudent'
import StudentList from '../components/StudentList/StudentList'
import { uuid } from 'uuidv4';
import StudentDetails from '../components/StudentDetails/StudentDetails'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[students, setstudents] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");
  const[searchTermResult, setSearchTermResult] = useState([]);
  // const STORAGE_KEY = 'students';
  const addStudentHandler =(student) =>{
    
    // console.log(student);
    const newStudent = {
      id:uuid(),
      ...student
    }
    axios.post(`http://localhost:3006/students/`, newStudent).then(res =>{
      const request = res.data
      setstudents([...students, request]);
    })
    // setstudents([...students, newStudent]);
    // setstudents([...students, {
    //   id:uuid(), ...student}]);
  }

  //get student from local storage
  useEffect(() =>{
    // const retrievedStudent = JSON.parse(localStorage.getItem(STORAGE_KEY, JSON.stringify(students)));
    axios.get('http://localhost:3006/students').then(resp =>{
    console.log(resp); 
    const retrievedStudent = resp.data;
    if(retrievedStudent) setstudents(retrievedStudent);
    })
    // if(retrievedStudent) setstudents(retrievedStudent);
  }, []);
  //set student to local storage
  useEffect(() =>{
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);
  const deleteStudentHandler = (id) =>{
    axios.delete(`http://localhost:3006/students/${id}`)
    const studentRemains = students.filter(student =>{
      return student.id !== id;
    });
    setstudents(studentRemains);
  }
  const searchKeyTermHandler =(searchValue) =>{
    setSearchTerm(searchValue);
    console.log(searchValue);
    if(searchValue !== ""){
      const newSearchResult = students.filter(student =>{
       return Object.values(student).join("").toLowerCase().includes(searchValue.toLowerCase());
      })
      setSearchTermResult(newSearchResult);
    }else{
      setSearchTermResult(students);
    }
    
    
  }
  // const students = [{"fullName":"Anselma Mincini","email":"amincini0@upenn.edu"},
  // {"fullName":"Druci Pennings","email":"dpennings1@angelfire.com"},
  // {"fullName":"Fair Nickoles","email":"fnickoles2@bbb.org"},
  // {"fullName":"Hieronymus Tison","email":"htison3@nbcnews.com"},
  // {"fullName":"Allix Graveson","email":"agraveson4@alexa.com"},
  // {"fullName":"Kaitlin Ayree","email":"kayree5@vk.com"},
  // {"fullName":"Cece Urlin","email":"curlin6@nifty.com"},
  // {"fullName":"Brigida Ellsworthe","email":"bellsworthe7@admin.ch"},
  // {"fullName":"Georgie Klaves","email":"gklaves8@gmpg.org"},
  // {"fullName":"Haley Midlar","email":"hmidlar9@blogger.com"}]
  return (
    <Router>
      <Container>
      <Header/>
      <Switch>
          <Route path="/" exact render={ (props) =>(
            <StudentList {...props} 
              studentsArray={searchTerm.length < 1 ? students : searchTermResult}
              term={searchTerm}
              searchKeyTerm={searchKeyTermHandler}
              deleteStudentHandler={deleteStudentHandler} />
          )}/>
          <Route path="/AddStudent" render={(props) =>(
            <AddStudent
            {...props}
            addStudentHandler={addStudentHandler}/>
          )}/>
          <Route path="/StudentDetails" component={StudentDetails} />
      </Switch>
      </Container>
      
    </Router>
    // <Container>
    //   <Header/>
    //   <AddStudent addStudentHandler={addStudentHandler}/>
    //   <StudentList 
    //   studentsArray={students}
    //   deleteStudentHandler={deleteStudentHandler}/>
    //   {/* <StudentDetails/> */}
    // </Container>
  );
}

export default App;
