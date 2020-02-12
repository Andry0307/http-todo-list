import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function UserModalForm({user, onSave, onChange}) {

    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('save');
        onSave(user)
    }

    function onValueChange(e) {
        onChange({[e.target.name]: e.target.value})
    }


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                add list
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>To-to item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onFormSubmit}>
                        <input className='form-control form-control-lg'
                               onChange={onValueChange}
                               value={user.name}
                               name='name'
                               type='text'
                               placeholder='name'/>
                        <input className='form-control form-control-lg'
                               onChange={onValueChange}
                               value={user.surname}
                               name='surname'
                               type='text'
                               placeholder='surname'/>
                        <input className='form-control form-control-lg'
                               onChange={onValueChange}
                               value={user.email}
                               name='email'
                               type='email'
                               placeholder='@mail'/>
                        <Modal.Footer>
                            <Button  variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type='submit' variant="primary" onClick={handleClose}>
                                add
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default UserModalForm;