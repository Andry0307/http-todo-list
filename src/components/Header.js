import React from 'react';

function Header({showModal}) {

    function onshowModal() {
        showModal()
    }

    return (
        <nav className='navbar  bg-dark'>
            <h2>Task List</h2>
            <button className='btn btn-success' onClick={onshowModal}>
                Add New
            </button>
        </nav>
    );
}

export default Header;