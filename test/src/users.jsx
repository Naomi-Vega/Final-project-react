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
            <h1>Users Signed Up </h1>
            {users.map((user, i) => {
                return (

                    <div key={i} className="user-item">
                        <div className='icon-item'>
                            <FaAddressCard />
                        </div>
                        <div className='info-item'>
                            <p>
                                <strong>First Name:</strong> {user.firstName}
                            </p>
                            <p>
                                <strong>Last Name:</strong> {user.lastName}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users