import React from 'react';
import { useState, useEffect } from 'react';

const UsersForm = ({addNewUser, userForUpdate,updateUser}) => {

  const reset = () => {
    setFirst_Name("");
    setLast_Name("");
    setEmail("");
    setPassword('');
    setBirthday('');
  };

  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const submit = (name) => {
    name.preventDefault();
    const obj = {
      first_name: name.target.first_name.value,
      last_name: name.target.last_name.value,
      email: name.target.email.value,
      password: name.target.password.value,
      birthday: name.target.birthday.value
    }
    {
      userForUpdate !== '' ?(
        updateUser(obj, userForUpdate.id)
        ) : (
        addNewUser(obj)
      )
    }
  }

  useEffect(() => {
    if (userForUpdate !== '') {
      setFirst_Name(userForUpdate.first_name)
      setLast_Name(userForUpdate.last_name)
      setEmail(userForUpdate.email)
      setPassword(userForUpdate.password)
      setBirthday(userForUpdate.birthday)
    } else {
      reset();
    }
  }, [userForUpdate]);

  return (
    <div className='container'>
      <form className='users-form' onSubmit={submit}>
        <b>New User</b>
        <div className='name-data'>
          <label htmlFor="first_name">
            <i className="fa-solid fa-user"></i>
          </label>
          <input placeholder='First name' type="text" id='first_name' onChange={(e) => setFirst_Name(e.target.value)} value={first_name}/>
          <input placeholder='Last name' type="text" id='last_name' onChange={(e) => setLast_Name(e.target.value)} value={last_name}/>
        </div>
        <div>
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input placeholder='Email' type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div>
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input placeholder='Password' type="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>
        <div>
          <label htmlFor="birthday">
            <i className="fa-solid fa-cake-candles"></i>
          </label>
          <input type="date" id='birthday' onChange={(e) => setBirthday(e.target.value)} value={birthday}/>
        </div>
        <button className='button-submit'>Submit</button>
      </form>
    </div>
  );  
};

export default UsersForm;