import React from 'react';

const Users = ({usersList, deleteUser, selectUser}) => {

  return (
    <>
      <center>
        <h1>Users Active</h1>
      </center>
      <div className='container container-users'>
          {
            usersList.map(user => (
              <div key={user.email} className='users'>
                <div className="user-img">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className='user-data'>
                  <h3>{user.first_name} {user.last_name}</h3>
                  <div className='line'></div>
                  <p>{user.email}</p>
                  <p>{user.password}</p>
                  <p>{user.birthday}</p>  
                  <button className='button-submit' onClick={() => deleteUser(user.id)}>Delete</button>
                  <button className='button-submit' onClick={() => selectUser(user)}>Update</button>
                </div>
              </div>
            ))
          }
      </div>
    </>
  );
};

export default Users;