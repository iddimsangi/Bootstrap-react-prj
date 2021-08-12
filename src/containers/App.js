
import { Container} from 'react-bootstrap'
import Header from '../components/Header/Header'
import AddStudent from '../containers/AddStudent/AddStudent'
import StudentList from '../components/StudentList/StudentList'
import './App.css';

function App() {
  return (
    <Container>
      <Header/>
      {/* <AddStudent/> */}
      <StudentList />
   
    </Container>
  );
}

export default App;
