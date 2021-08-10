import React, {useState}  from "react";
import axios  from "axios"
import { useHistory } from "react-router-dom";
const AddUser = () => {

          let history = useHistory();
          const [user,setUser]=useState({
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    website: ""
                   
          })

          const {name, username, email, phone, website}=user;

          const onChangeHandler = (e) => {
                    setUser({...user,[e.target.name]: e.target.value})
                    // eslint-disable-next-line
          }

          const onSubmitHandler = async(e)=>{
                    e.preventDefault()
                    await axios.post('http://localhost:3010/users',user)
                    history.push('/')
          }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit = {e=>onSubmitHandler(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              vlaue={name}
              onChange={e=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e=>onChangeHandler(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
