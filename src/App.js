
import {Card, Button, Container} from 'react-bootstrap'
import logo from './logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
      <Card style={{ width: '18rem', boxShadow:'0 2px 2px #ccc' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </Container>
  
    </div>
  );
}

export default App;
