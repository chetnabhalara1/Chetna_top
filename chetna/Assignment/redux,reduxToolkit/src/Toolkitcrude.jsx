// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { deleteFun, insert, update } from './reduxcrud/useraction';
import { useDispatch, useSelector } from 'react-redux';

const Toolkitcrude = () => {
    const alldata = useSelector((state) => state.couneter.data);
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [data, setData] = useState({ uname: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const saveData = (e) => {
        e.preventDefault();
        if (!data.uname.trim()) {
            alert('Name cannot be empty');
            return;
        }
        if (id !== '') {
            // Update
            dispatch(update(id, data));
        } else {
            // Insert
            dispatch(insert(data));
        }
        setData({ uname: '' });
        setId('');
    };

    const editData = (id) => {
        const item = alldata.find((index) => index === id);
        if (id) {
            setData(item);
            setId(id);
        }
    };

    return (
        <div>
            <h3>CRUD Example</h3>
            <form method="post" action="#" onSubmit={saveData}>
                <label htmlFor="uname">Name:</label>
                <input type="text"name="uname"id="uname"onChange={handleChange}value={data.uname}/>
                <br />
                <br />
                <button type="submit">Save</button>
                <br />
                <br />
            </form>
            <table border="2" align="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {alldata.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.uname}</td>
                            <td>
                                <button onClick={() => editData(index)}>Edit</button>
                                <button onClick={() => dispatch(deleteFun(index))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Toolkitcrude;
