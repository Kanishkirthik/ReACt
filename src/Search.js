import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/esm/Row';
import 'D:/Mernstack/app/node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Search() {
  return (
    <>
    <Form>
     <FormGroup >
        <Row className='m-1 justify-content-center'>
            <Col md='auto'>
        <Form.Control type='text' placeholder='Search your Course' ></Form.Control>
        </Col>
        <Col md='auto' >
        <Form.Control type='submit'value={'search'}></Form.Control>
        </Col>
        </Row>
     </FormGroup>
    </Form>
    </>
  )
}
