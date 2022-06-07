import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Adduser from './componants/Addauser/Adduser';
import NoteShow from './componants/NoteShow/NoteShow';
import Header from './componants/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addUser' element={<Adduser></Adduser>}></Route>
        <Route path='/noteshow' element={<NoteShow></NoteShow>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
