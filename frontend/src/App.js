import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import NoteState from './context/NoteState';
function App() {
  return (
    <>
        <NoteState>
        <Router>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>          
            <Route exact path='/about' element={<About/>}/>          
          </Routes>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
