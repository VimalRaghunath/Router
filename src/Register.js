import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate()
  return (
    <div>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" /><br/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={()=>navigate('/login')} variant="primary" >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register
