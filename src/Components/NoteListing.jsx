import React from 'react'
import AddNote from './AddNote'

function NoteListing() {
    return (
        <div className="note-listing">
            <div className='container'>
                <div className="row note-row">
                    <div className="col-4 my-col">
                        <div className="note-col">
                            <div className="note-title">
                                <h4>Note #1 Title here</h4>
                            </div>
                            <div className="note-para">
                                <p>note text here - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti placeat facilis nam magni corporis minus dicta </p>
                            </div>
                            <div className="note-actions">
                                <div className="note-created">
                                    <span>12/01/21</span>
                                </div>
                                <div className="note-buttons">
                                    <button className='btn btn-delete'><i className="bi bi-trash3-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-col">
                    <div className="note-col">
                        <AddNote/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteListing;