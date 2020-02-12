import React from 'react';

function UserListItem({user}) {
    return (

            <li className="list-group-item">
                <strong>name:</strong> {user.name}
                <strong>surname:</strong>  {user.surname}
                <strong>email:</strong> {user.email}


                <button className='btn btn-danger li_button'>delete</button>
                <button className='btn btn-primary li_button'>edit</button>
            </li>
    );
}

export default UserListItem;