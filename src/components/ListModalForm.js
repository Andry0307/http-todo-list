import React from 'react';
import {Button, Modal} from "react-bootstrap";

function ListModalForm({listItem, onSave, onChange, show, closeModal}) {

    function onCloseModal() {
        closeModal()
    }

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(listItem)
    }

    function onValueChange(e) {
        onChange({[e.target.name]: e.target.value})
    }

    return (
        <div>
            <Modal show={show} onHide={onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>add new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onFormSubmit}>
                        <input className='form-control form-control-lg'
                               onChange={onValueChange}
                               value={listItem.title}
                               name='title'
                               type='text'/>
                        <Modal.Footer>
                            <Button  variant="secondary" onClick={onCloseModal}>
                                Close
                            </Button>
                            <Button type='submit' variant="primary" onClick={onCloseModal}>
                                add
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ListModalForm;