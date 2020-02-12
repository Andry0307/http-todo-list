import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HttpService from "./services/HttpService";
import UsersList from "./components/UsersList";
import UserModalForm from "./components/UserModalForm";
import Header from "./components/Header";

function App() {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        email: ''
    });


    useEffect(() => {
        HttpService.get('').then(resp => setUsers(resp.data));
    }, []);

    function onChangeUser(changes) {
        setNewUser({
            ...newUser,
            ...changes
        })
    }
    
    function newUserSave(user) {
        console.log('new User', user);
        setUsers([
            ...users,
            user
        ])
    }
    
  return (
    <div>
        <Header />
        <UserModalForm onSave={newUserSave}
                       user={newUser}
                       onChange={onChangeUser}/>
        <UsersList users={users}/>
    </div>
  );
}

export default App;
