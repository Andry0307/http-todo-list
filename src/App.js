import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HttpService from "./services/HttpService";
import TodoList from "./components/TodoList";
import ListModalForm from "./components/ListModalForm";
import Header from "./components/Header";

function App() {

    const [show, setShow] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const [newListItem, setNewListItem] = useState({
        title: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        HttpService.get('').then(resp => setTodoList(resp.data));
    }, []);

    function onChangeListItem(changes) {
        setNewListItem({
            ...newListItem,
            ...changes
        })
    }

    function onDeleteListItem(id) {
        HttpService.delete(id).then(resp => {
            setTodoList(todoList.filter(item => item.id !== resp.data.id));
        });
    }

    function onEditListItem(listItem) {
        handleShow();
        setNewListItem(listItem);
    }
    
    function newListSave(listItem) {
        if(listItem.id){
            updateList(listItem);
        }else {
            createList(listItem)
        }
      setNewListItem({title: ''})
    }

    function updateList(listItem) {
       HttpService.put(listItem.id, listItem).then( resp =>
           setTodoList(todoList.map(item =>
               item.id === resp.data.id ? resp.data : item
           ))
       )
    }

    function createList(listItem) {
        HttpService.post('', listItem).then(resp =>
            setTodoList([...todoList, resp.data]));
    }

    function activationItem(listItem) {
        listItem.isDone = !listItem.isDone;
        HttpService.put(listItem.id, listItem).then(resp =>
            setTodoList(todoList.map(item =>
                item.id === resp.data.id ? resp.data : item))
        )
    }
    
  return (
    <div>
        <Header showModal={handleShow}/>
        <ListModalForm onSave={newListSave}
                       listItem={newListItem}
                       onChange={onChangeListItem}
                       show={show}
                       closeModal={handleClose}/>
        <TodoList todoList={todoList}
                  odDelete={onDeleteListItem}
                  onEdit={onEditListItem}
                  onActive={activationItem}/>
    </div>
  );
}

export default App;
