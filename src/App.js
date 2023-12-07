import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavApp from './nav';
import CardApp from './card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import MyComponent from './MyComponent';

function App() {

const [firstName, setFirstName] = useState('');

 const handleChange = (event) => {
    setFirstName(event.target.value);
 };
 return (
  <>
      <NavApp/>
      <Stack direction="horizontal" gap={2}>
      <InputGroup className="mb-3 ">
        <Form.Control
          placeholder="First Name"
          aria-label="First Name"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
      </InputGroup>
  <Badge bg="danger" className="mb-3 ms-auto" value={firstName} >
   <MyComponent firstName={firstName} />
    </Badge>
  </Stack>
  <CardApp/>

</>
    
 );
}

export default App;