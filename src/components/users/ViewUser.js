import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams , NavLink } from 'react-router-dom'
import './ViewUser.css'
const ViewUser = () => {

          const {id}=useParams()
          const [ user, setUser ]=useState([])
          const usergetdata = async () => {
                    const result = await axios.get(`http://localhost:3010/users/${id}`)
                    setUser(result.data)
          }
          useEffect(()=>{
                    usergetdata()
          },[])
          return (
                    <div className="container">
                              
                              <div className="w-75 mx-auto shadow p-5">
                              <h2 className="text-center mb-4"> User Details</h2>
                              <ul className="list-group list-group-flush">
                              <li className="list-group-item"></li>
                              <br/>
                              <label className="lable">Name</label>
                              <li className="list-group-item bg-red">{user.name}</li>
                              <label className="lable">Username</label>
                              <li className="list-group-item">{user.username}</li>
                              <label className="lable">Email</label>
                              <li className="list-group-item">{user.email}</li>
                              <label className="lable">Phone</label>
                              <li className="list-group-item">{user.phone}</li>
                              <label className="lable">Website</label>
                              <li className="list-group-item">{user.website}</li>
                              <li className="list-group-item"></li>
                              </ul>
                              <NavLink to='/' type="button" class="btn btn-success">Home</NavLink>
                              </div>
                    </div>
          )
}

export default ViewUser
