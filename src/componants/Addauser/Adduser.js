import React from 'react';
import { Form } from 'react-bootstrap';

const Adduser = () => {
    const handleFormSubmit =(event)=>{
        event.preventDefault();
        const userName = event.target.name.value;
        const textData = event.target.comment.value;
        const user = {userName , textData};
        console.log(user);


        fetch('http://localhost:5000/note',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
       
        
    }
    
    return (
        <div>
            <h1>add user</h1>
            <Form onSubmit={handleFormSubmit } className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="name" name='name' placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control name='comment' as="textarea" rows={3} />
  </Form.Group>
  <input type="submit" value="Submit" />
</Form>
        </div>
    );
};

export default Adduser;