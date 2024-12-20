// eslint-disable-next-line no-unused-vars
import React from 'react';

function UserList() {

    const data = [
        { id: 1, name: 'chetna', age: 22 },
        { id: 2, name: 'surbhi', age: 24 },
        { id: 3, name: 'yati', age: 22 },
        { id: 4, name: 'jevika', age: 20 },
       
    ];

    return (
        <div>
            <h1>User List</h1>
          
            <ul>

                {
                    data.map((data) => (
                        <>
                            <li>
                                {data.name}, {data.age}
                            </li>
                        </>
                    ))
                }
            </ul>
        </div>
    );
}

export default UserList;
