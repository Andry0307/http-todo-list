import React from 'react';
import TodoListItem from "./TodoListItem";

function TodoList({todoList, odDelete, onEdit, onActive}) {

    function deleteItem(id) {
        odDelete(id)
    }

    function activeItem(id) {
        onActive(id)
    }
    return (
            <ul className="list-group App">
                {todoList.map( (item) =>
                    <TodoListItem key={item.id}
                                  item={item}
                                  onDelete={deleteItem}
                                  onEdit={onEdit}
                                  onActive={activeItem}/>
                )}
            </ul>
    );
}

export default TodoList;