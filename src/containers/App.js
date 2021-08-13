import React, {useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import Header from '../components/Header/Header'
import AddStudent from '../containers/AddStudent/AddStudent'
import StudentList from '../components/StudentList/StudentList'
import { uuid } from 'uuidv4';
import StudentDetails from '../components/StudentDetails/StudentDetails'
import './App.css';

function App() {
  const[students, setstudents] = useState([]);
  const STORAGE_KEY = 'students';
  const addStudentHandler =(student) =>{
    console.log(student);
    const newStudent = {
      id:uuid(),
      ...student
    }
    setstudents([...students, newStudent]);
    // setstudents([...students, {
    //   id:uuid(), ...student}]);
  }

  //get student from local storage
  useEffect(() =>{
    const retrievedStudent = JSON.parse(localStorage.getItem(STORAGE_KEY, JSON.stringify(students)));
    if(retrievedStudent) setstudents(retrievedStudent);
  }, [])
  //set student to local storage
  useEffect(() =>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students])
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
    <Container>
      <Header/>
      <AddStudent addStudentHandler={addStudentHandler}/>
      <StudentList studentsArray={students}/>
      {/* <StudentDetails/> */}
    </Container>
  );
}

export default App;
