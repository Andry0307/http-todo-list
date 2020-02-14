import React from 'react';

function TodoListItem({item, onDelete, onEdit, onActive}) {

    function deleteTodo(e) {
        e.stopPropagation();
        onDelete(item.id);
    }

    function editTodo(e) {
        e.stopPropagation();
        onEdit(item);
    }

    function isActivation() {
        onActive(item)
    }

    return (
            <li className={`list-group-item ${item.isDone ? 'list-group-item-success' : ''}`}
                onClick={isActivation}>
                {item.title}
                <button className='btn btn-danger li_button' onClick={deleteTodo}>
                    delete
                </button>
                <button className='btn btn-secondary li_button' onClick={editTodo}>
                    edit
                </button>
            </li>
    );
}

export default TodoListItem;