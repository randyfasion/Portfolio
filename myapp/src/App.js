import './App.css';
// import BucketList from './pages/Bucket-List.js';
import{ Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Contact Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Resume</Nav.Link>
    </Nav.Item>
  </Nav>

    // <div className="bucket-app">
    //   <BucketList />
    // </div>
  );
}

export default App;
