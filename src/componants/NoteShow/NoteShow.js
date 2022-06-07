import React from 'react';
import { Card } from 'react-bootstrap';

const NoteShow = ({note}) => {
    console.log(note);
    const {userName, _id , textData} = note
    return (
        <div>
           <Card style={{ width: '18rem' } }className='my-2'>
  <Card.Body>
    <Card.Title>{userName}</Card.Title>
    
    <Card.Text>
      {textData}
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card> 
        </div>
    );
};

export default NoteShow;