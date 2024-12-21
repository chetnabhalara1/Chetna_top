
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const JsonseverExample = () => {
    const [id, setId] = useState("")
    const [data, setData] = useState({
        name: "",
        age: ""
    })

    const [allData, setAllData] = useState([])
    const disp = () => {
        axios.get("http://localhost:3000/chetna")
            .then((res) => setAllData(res.data))

    }
    useEffect(() => {
        disp()
    }, [])
    const saveData = (e) => {
        e.preventDefault()
        if (id != "") {
            // update
            axios.put("http://localhost:3000/chetna/" + id, data)
                .then((res) => console.log(res))
        }
        else {
            // Insert
            axios.post("http://localhost:3000/chetna", data)
                .then((res) => console.log(res))
        }


        disp()
        setData({
            name: "",
            age: ""
        })
        setId("")
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const delData = (id) => {
        axios.delete("http://localhost:3000/chetna/" + id)
            .then((res) => console.log(res))
        disp()
    }
    const editData = (id) => {
        axios.patch("http://localhost:3000/chetna/" + id)
            .then((res) => {
                setData(res.data)
                setId(id)
            })


    }
    return (
        <div>
            <h2>Json sever Example</h2>
            <form action="#" method='post' onSubmit={saveData} >
                <label htmlFor="">name:</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={data.name} /><br /><br />
                <label htmlFor="">Age:</label>
                <input type="number" name="age" id="age" onChange={handleChange} value={data.age} /><br /><br />

                <input type="submit" name="save" id="save" value="save" /><br /><br />
            </form>
            <table border={"3px"}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>action</th>
                </tr>
                {
                    allData.map((i) => {
                        return (
                            <>
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>
                                        <button onClick={() => editData(i.id)}>Edit</button>
                                        <button onClick={() => delData(i.id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>


    )
}

export default JsonseverExample
