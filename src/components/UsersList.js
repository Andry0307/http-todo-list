import React from 'react';
import UserListItem from "./UserListItem";

function UsersList({users}) {
    return (
            <ul className="list-group App">
                {users.map( (item) =>
                    <UserListItem key={item.id} user={item} />
                )}
            </ul>
    );
}

export default UsersList;