import React, { useEffect,  useState } from "react";
import axios from "axios";
// import data from "../../db.json";
import './Home.css'
import {Link } from 'react-router-dom'
const Home = () => {
  const [users, setUsers]=useState([])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3010/users");
    // console.log(result)
    
    setUsers(result.data.reverse());           
};
  useEffect(() => {
         
          loadUsers();
          // eslint-disable-next-line
 },[]);

 const deleteChangHandler = async (id) => {
   console.log(id)
    await axios.delete(`http://localhost:3010/users/${id}`)
  loadUsers();
 }
  console.log("hello",users)
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((item,id)=>(
                    
                    <tr>
                      <th scope="row">{id+1}</th>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={`/users/${item.id}`} className="btn btn-primary mr-2">View</Link>
                        <Link to={`/users/edit/${users.id}`} className="btn btn-outline-primary mr-2">Edit</Link>
                        <Link className="btn btn-danger " onClick={()=>deleteChangHandler(item.id)}>Delete</Link>

                      </td>
                    </tr>
               
          ))}
             </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
