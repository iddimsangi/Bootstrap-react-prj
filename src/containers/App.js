
import { Container} from 'react-bootstrap'
import Header from '../components/Header/Header'
import AddStudent from '../containers/AddStudent/AddStudent'
import StudentList from '../components/StudentList/StudentList'
import StudentDetails from '../components/StudentDetails/StudentDetails'
import './App.css';

function App() {
  return (
    <Container>
      <Header/>
      {/* <AddStudent/> */}
      {/* <StudentList /> */}
      <StudentDetails/>
    </Container>
  );
}

export default App;
