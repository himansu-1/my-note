import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteItem from './NoteItem';
import NoteContext from '../note-context';
import NoteInput from "./noteInput";



const NotesContent = () => {
    const context = useContext(NoteContext)
    const { note, getNotes ,editNote} = context
    const ref = useRef(null)
    const refClose = useRef(null)
    const [notes, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})


    const updateNote = (currentnote) => {
        ref.current.click()
        setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
    }

    const onChange = (e)=>{
        setNote({...notes,[e.target.name]:e.target.value})
    }

    const handleClick =(e)=>{
        // e.preventDefault()
        editNote(notes.id,notes.etitle,notes.edescription,notes.etag )
        refClose.current.click()
    }

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <NoteInput />
            <h3 className='my-3'>This Notes Content-Box</h3>
            <div className="container">
                {note.length === 0 && "No Notes to Display"}
            </div>
            <div className="row">
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal " ref={ref}>
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <h3>Here Edit Notes</h3>

                                    <div className="col-12">
                                        <label htmlFor="etitle" className="form-label">Edit Title</label>
                                        <input type="text" className="form-control" id="etitle" name='etitle' placeholder="Enter Title Here" value={notes.etitle} onChange={onChange} />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="edescription" className="form-label">Edit Description</label>
                                        <input type="text" className="form-control" id="edescription" name='edescription' placeholder="Enter Description Here" value={notes.edescription}  onChange={onChange} />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="etag" className="form-label">Edit Tag</label>
                                        <input type="text" className="form-control" id="etag" name='etag' placeholder="Enter Description Here" value={notes.etag}  onChange={onChange} />
                                    </div>
                                    {/* <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Sign in</button>
                                    </div> */}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                                <button disabled={notes.etitle.length<5 || notes.edescription.length<5} onClick={handleClick}  type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // console.log(note)
                    note.map((notes) => {
                        // {console.log(notes._id)}
                        return <NoteItem key={notes._id} note={notes} updateNote={updateNote} />
                    })
                }
            </div>
        </>
    );
}


export default NotesContent;