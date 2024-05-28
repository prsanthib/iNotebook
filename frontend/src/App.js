import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <>
        <NoteState>
        <Router>
        <NavBar/>
        <Alert alert="success"/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>}/>          
            <Route exact path='/about' element={<About/>}/>          
          </Routes>
          </div>
        </Router>       
        </NoteState>

    </>
  );
}

export default App;
