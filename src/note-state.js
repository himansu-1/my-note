import NoteContext from "./note-context";
import React, { useState } from 'react';

const NoteState = (props) => {
  const [note, setNote] = useState([])

  // getting all notes from DB
  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notes/fetchAllNotes", {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViYmMxM2UxOGM5YTYxYTg3YzZlMGY0In0sImlhdCI6MTcwNjgwNDA3OH0.TiZkqcdwvmWkh11Yv5GYeDXAh2GyjvrBUfZEEgQVq2c"
        }
      });

      const result = await response.json();
      setNote(result)
      
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Deleting notes
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/notes/deleteNotes/${id}`, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViYmMxM2UxOGM5YTYxYTg3YzZlMGY0In0sImlhdCI6MTcwNjgwNDA3OH0.TiZkqcdwvmWkh11Yv5GYeDXAh2GyjvrBUfZEEgQVq2c"
        }
      })      
      const result = await response.json()
      // console.log(result)
      
      const afterDeleteNote = note.filter((note) => { return note._id !== id })
      setNote(afterDeleteNote)
      console.log("successfully Note deleted which id :) ", id,result)      
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // editing a note
  const editNote = async (id,title, description, tag)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/notes/updateNotes/${id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViYmMxM2UxOGM5YTYxYTg3YzZlMGY0In0sImlhdCI6MTcwNjgwNDA3OH0.TiZkqcdwvmWkh11Yv5GYeDXAh2GyjvrBUfZEEgQVq2c"
        },
        body: JSON.stringify({title, description, tag})
      });

      const result = await response.json();
      console.log(result)

      let newNote = JSON.parse(JSON.stringify(note))
      for (let i = 0; i < newNote.length; i++) {
        const element = newNote[i];
        if (element._id === id) {
          // element.title = title
          // element.description = description
          // element.tag = tag
          newNote[i].title = title
          newNote[i].description = description
          newNote[i].tag = tag
          break
        }        
      }
      setNote(newNote)
    } catch (error) {
      console.error("Error:", error);
    }

  }

  // adding a note with api call
  const addNote = async (title, description, tag)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/notes/insertNotes`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViYmMxM2UxOGM5YTYxYTg3YzZlMGY0In0sImlhdCI6MTcwNjgwNDA3OH0.TiZkqcdwvmWkh11Yv5GYeDXAh2GyjvrBUfZEEgQVq2c"
        },
        body:JSON.stringify({title, description, tag})
      })      
      const result = await response.json()
      console.log("this is addNote result :) ",result)
      
      console.log("addNote clicked")
      const tempNote = {
        "_id": `65bbc3c36144a87c6e103`,
        "user": "65bbc13e18c9a61a87c6e0f4",
        "title": title,
        "description": description,
        "tag": tag,
        "__v": 0
      }
      setNote(note.concat(tempNote)) 

    } catch (error) {
      console.log(error)
    }
  }
  // const addNote = (title, description, tag) => {
  //   console.log("Im clicked")
  //   const tempNote = {
  //     "_id": `65bbc3c36144a87c6e103`,
  //     "user": "65bbc13e18c9a61a87c6e0f4",
  //     "title": title,
  //     "description": description,
  //     "tag": tag,
  //     "__v": 0
  //   }
  //   note.concat(tempNote)
  //   note.push(tempNote)
  //   setNote(note.concat(tempNote))
  //   console.log(note)
  // }

  return (
    <>
      <NoteContext.Provider value={{ note, addNote, deleteNote, getNotes ,editNote}}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
}


export default NoteState;