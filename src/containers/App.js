
import { Container} from 'react-bootstrap'
import Header from '../components/Header/Header'
import AddStudent from '../containers/AddStudent/AddStudent'
import './App.css';

function App() {
  return (
    <Container>
      <Header/>
      <AddStudent/>
    </Container>
  );
}

export default App;
