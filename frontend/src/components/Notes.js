import React,{useContext} from 'react'
import context from '../context/NoteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const contextInitial = useContext(context);
    const {note,setNote} = contextInitial;

    return (
        <div className='row'>
        <h2>My Notes</h2>
         {note.map((n) => {
            return <Noteitem key={n.key} title={n.title} description={n.description} />;
         })}
        </div>
    )
}

export default Notes

