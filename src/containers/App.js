
import { Container} from 'react-bootstrap'
import Header from '../components/Header/Header'
import AddStudent from '../containers/AddStudent/AddStudent'
import StudentCard from '../components/StudentList/StudentCard/StudentCard'
import './App.css';

function App() {
  return (
    <Container>
      <Header/>
      <AddStudent/>
      <StudentCard />
    </Container>
  );
}

export default App;
