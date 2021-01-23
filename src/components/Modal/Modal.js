import React from 'react'
import './Modal.css'

const Modal = ({ visible, title, onCloseDialog, children }) => {

    return (
        <>
            {visible && (
                <div className="dialog">
                    <div className="dialog__header">
                        <h5 className="dialog__title mb-0">{title}</h5>
                        <button onClick={onCloseDialog} className=" btn btn-outline-secondary">X</button>
                    </div>
                    <div className="dialog__body">
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
