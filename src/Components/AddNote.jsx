import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../features/note/noteSlice'

function AddNote() {
    
    const [note, setNote] = useState({
        title: '',
        body: ''
    })
    const noteCharLimit = 200
    const dispatch = useDispatch()

    const handleSave = (e) => {
        e.preventDefault();
        const newNote = {
            id: Date.now(),
            ...note,
            createdAt: new Date().toLocaleDateString()
        }
        dispatch(createNote(newNote))
    }
    return (
        <form onSubmit={handleSave}>
            <input className="note-title title-input" type="text" onChange={(e)=>setNote({...note
            ,title:e.target.value})} name="title" placeholder="Enter your Title..." required />
            <textarea className="note-para" maxLength={noteCharLimit} name="textarea" onChange={(e)=>setNote({...note,body:e.target.value})} placeholder='Enter Your Note Description...' required></textarea>
            <div className="note-actions">
                <div className="note-created">
                    <span className='rem-text'>{noteCharLimit - note.body.length} Remaining</span>
                </div>
                <div className="note-buttons">
                    <button className='btn btn-success' >Save</button>
                </div>
            </div>
        </form >
    )
}

export default AddNote
