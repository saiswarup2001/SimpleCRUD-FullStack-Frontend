import React, { useState } from 'react'
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  //navigate to home page after submit
  let navigate = useNavigate();
//store the informatation and push that to database
  const [user, setUser] = useState({
    name:"",
    username:"",
    email:""
  })

  const {name,username,email} = user

  //store the data in json form
  const onInputChange = (event) =>{
    setUser({ ...user, [event.target.name]:event.target.value})
  }

  //submit into database and show on home page
  const onSubmit =async (event)=>{
      event.preventDefault();
      await axios.post("http://localhost:8080/user", user)
      navigate("/")
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                <h2 className='text-center m-4'>Register User</h2>
              
              <form onSubmit={(event)=>onSubmit(event)}>
                <div className='mb-3'>
                  <label htmlFor='Name' className='form-lable'>
                    Name
                  </label>  
                  <input 
                    type={'text'} 
                    className='form-control'
                    placeholder='Enter your name' 
                    name='name' 
                    value ={name}
                    onChange={(event) =>onInputChange(event)}
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='Userame' className='form-lable'>
                    Username
                  </label>  
                  <input 
                    type={'text'} 
                    className='form-control'
                    placeholder='Enter your username' 
                    name='username'
                    value ={username}
                    onChange={(event) =>onInputChange(event)}
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='Email' className='form-lable'>
                    Email
                  </label>  
                  <input 
                    type={'text'} 
                    className='form-control'
                    placeholder='demo@gmail.com'
                    name='email'
                    value ={email}
                    onChange={(event) =>onInputChange(event)}
                  />
                </div>
                <button type='submit' className='btn btn-outline-secondary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to='/'>Cancle</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
