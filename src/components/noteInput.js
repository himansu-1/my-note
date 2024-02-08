import React,{useContext,useState} from 'react';
import NoteContext from '../note-context';

const NoteInput = () => {
    const context = useContext(NoteContext)
    const {addNote} = context

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const handleClick =(e)=>{
        // e.preventDefault()
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    }
    // const {addNote} = context
    return (
        <>
            <form className="row g-3 mt-5">
                <h3>Here Input Notes</h3>

                <div className="col-12">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' placeholder="Enter Title Here" onChange={onChange} value={note.title}/>
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' placeholder="Enter Description Here" onChange={onChange} value={note.description}/>
                </div>
                <div className="col-12">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' placeholder="Enter Description Here" onChange={onChange} value={note.tag}/>
                </div>
                <div className="col-12 text-center disabled">
                    <button type="submit" disabled={note.title.length <5 || note.description.length <5} className={`btn btn-primary ${""}`} onClick={handleClick}>Submit</button>
                </div>
            </form>
        </>
    );
}

export default NoteInput;