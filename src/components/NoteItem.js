import React,{useContext} from 'react';
import NoteContext from '../note-context';


const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const {deleteNote} = context
    // const deleteOnclick=()=>{
    //     dele
    // }
    const {note,updateNote} = props
    
    // useEffect(() => {
    
    // }, [])
    return (
        <>
        <div className='col-md-3 '>
            <div className="card my-2" >
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <h5 className="card-title me-xl-4">{note.title}</h5>
                            <i className="fa fa-sharp fa-light fa-pen-to-square mx-2 btn" onClick={()=>{updateNote(note)}}></i>
                            <i className="fa fa-sharp fa-light fa-trash mx-2 btn" onClick={()=>{deleteNote(note._id)}}></i>

                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
            </div>
        </div>
        </>
    );
}

export default NoteItem;