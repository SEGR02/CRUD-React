import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Users from './components/Users'
import UsersForm from './components/UsersForm'
import axios from 'axios'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsersList(res.data))
    console.log(data)
  }, [])

  const [usersList, setUsersList] = useState([])
  const [userForUpdate, setUserForUpdate] = useState('')

  function addNewUser(user){
    // alert(user.last_name)
    // setUsersList([...usersList , user]);
    axios.post('https://users-crud1.herokuapp.com/users/', user)
    .then(()=> getUSers())
    .catch(error => console.log(error.response.data));
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=> getUSers());
  }


  function getUSers(){
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res)=> setUsersList(res.data))
  }

  function selectUser(user){
   setUserForUpdate(user);
  }

  function updateUser(user, id){
    axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, user)
    .then(()=> getUSers());
  }

  return (
    <>
      <UsersForm updateUser={updateUser} selectUser={selectUser} userForUpdate={userForUpdate} addNewUser={addNewUser}/>
      <Users selectUser={selectUser} deleteUser={deleteUser} usersList={usersList}/>
    </>
  )
}

export default App
