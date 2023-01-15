import React from 'react'
import AddNote from './AddNote'
import { useSelector,useDispatch } from 'react-redux';
import { deleteNote } from "../features/note/noteSlice"

function NoteListing() {

    const notes = useSelector(state => state.note)
    const dispatch = useDispatch()
    console.log(notes);
 
    const handleDelete = (id)=>{
        dispatch(deleteNote(id))
        console.log("hi");
    }
    return (
        <div className="note-listing">
            <div className='container'>
                <div className="row note-row">
                    {
                        notes.map((note, id) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 my-col" key={id}>
                                    <div className="note-col">
                                        <div className="note-title">
                                            <h4>{note.title}</h4>
                                        </div>
                                        <div className="note-para">
                                            <p>{note.body}</p>
                                        </div>
                                        <div className="note-actions">
                                            <div className="note-created">
                                                <span>{note.createdAt}</span>
                                            </div>
                                            <div className="note-buttons">
                                                <button className='btn btn-delete' onClick={()=>handleDelete(note.id)}><i className="bi bi-trash3-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 my-col">
                        <div className="note-col add-col">
                            <AddNote />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteListing;