import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []); 

  return (
    <div className='container' >
      <h1 className='header' >User List</h1>
      <div className="list">
        {listOfUsers.map(user => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;