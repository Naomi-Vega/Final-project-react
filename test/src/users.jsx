import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { FaAddressCard } from "react-icons/fa";


function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        var newUsers = localStorage.getItem("users")
        newUsers = JSON.parse(newUsers)
        console.log(newUsers)
        setUsers(newUsers)
    }, [])
    return (
        <div className='cards'>
            <h1>Users Signed Up <FaAddressCard /></h1>
            {users.map((user, i) => {
                return (
                    
                    <div key={i} className="user-item">
                        <p>
                           First Name: {user.firstName}
                        </p>
                        <p>
                          Last Name: {user.lastName}
                        </p>
                        <p>
                          Email: {user.email}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Users