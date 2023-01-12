import React from 'react'

function AddNote() {
    return (
        <div className='new-note'>
            <div className="add-note">
                <input type="text" className="newnote-title" placeholder='Enter your Note title...'/>
                    <textarea className="newnote-para" name="add-note" cols="auto" rows="8" placeholder='Write your Note here...'>
                    </textarea>
                    <div className="newnote-actions">
                        <span className='rem-text'>200 remaining</span>
                        <button className='btn btn-success'>Save</button>
                    </div>
            </div>
        </div>
    )
}

export default AddNote
