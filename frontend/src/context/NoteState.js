import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>
    {
        const notes = [
            {
                "key":1,
                "_id": "6651a18382acf0f4f30d1003",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "first note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:29:55.144Z",
                "__v": 0
              },
              {
                "key":2,
                "_id": "6651a18d82acf0f4f30d1005",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "second note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:30:05.341Z",
                "__v": 0
              },
              {
                "key":3,
                "_id": "6651a19382acf0f4f30d1007",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "third note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:30:11.413Z",
                "__v": 0
              },
              {
                "key":4,
                "_id": "6651a19382acf0f4f30d1007",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "third note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:30:11.413Z",
                "__v": 0
              },{
                "key":5,
                "_id": "6651a19382acf0f4f30d1007",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "third note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:30:11.413Z",
                "__v": 0
              },{
                "key":6,
                "_id": "6651a19382acf0f4f30d1007",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "third note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:30:11.413Z",
                "__v": 0
              },{
                "key":7,
                "_id": "6651a19382acf0f4f30d1007",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": "third note",
                "description": "this is my first notes",
                "tag": "first",
                "date": "2024-05-25T08:30:11.413Z",
                "__v": 0
              }
            ]

            const [note,setNote] = useState(notes);

            //addnotes
            const addNotes=(title,description,tag)=>{
                const n = { 
                "key":notes.length+1,
                "_id": "6651a19382acf0f4f30d1007",
                "user": "664f888c9d97d4fa0d286ffa",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2024-05-25T08:30:11.413Z",
                "__v": 0
            }
                setNote(notes => notes.concat(n));
            }
            //deletenotes
            const deleteNotes=(id)=>{
                
            }
            //editnotes
            const editNotes=(id)=>{
                
            }

        return(

        <NoteContext.Provider value={{note,addNotes,deleteNotes,editNotes}}>
            {props.children}
        </NoteContext.Provider>
        );
    }

    export default NoteState;