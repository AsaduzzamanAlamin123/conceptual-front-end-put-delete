import React, { useEffect, useState } from 'react';
import './Home.css';
import NoteShow from '../NoteShow/NoteShow';

const Home = () => {
    const [notes , setNotes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/notes')
        .then(res=>res.json())
        .then(data=>setNotes(data))


      
    },[])
    const handleSearch = (event)=>{

        event.preventDefault()

        const searchText = event.target.search.value;
        console.log(searchText);
        // const user = {searchText}

        if(searchText){
            fetch(`http://localhost:5000/notes?userName=${searchText}`)
        .then(res=>res.json())
        .then(data=>setNotes(data))
        }
        else{
            alert('plz write name')
        }

        // console.log(user);

    }
    return (
        <div>

            <form  onSubmit={handleSearch}>
            <input type="text"name='search' /><br />
            <input type="submit" value="search" />

            </form>
            <h2>home</h2>
            <div className='cards'>
                {
                    notes.map(note=><NoteShow note={note}></NoteShow>)
                }
            </div>
        </div>
    );
};

export default Home;