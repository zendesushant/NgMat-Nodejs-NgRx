
import React, { useContext, useReducer, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import AuthContext from '../../_services/app-service'
import  './Login.css'
export default function Login(){
  
  let username = useRef()
  let password = useRef()
  let navigate = useNavigate();
  let [isFormValid,isFormValidUpdate] = useState(true);
  let [invalidCredentials,invalidCredentialsUpdate] = useState(false);
  let onInputChange = ()=>{
    invalidCredentialsUpdate(false)
    let usrname = username.current.value;
    let passwrd = password.current.value;
    if(usrname.trim()!=='' && passwrd.trim()!==''){
      isFormValidUpdate(false);
    }else{
      isFormValidUpdate(true)
    }
  }

  let authCredentialaValidation = (userData)=>{
    let username='sush';
    let password='zende';
    if(userData.username===username && userData.password===password){
      invalidCredentialsUpdate(false)
      return true;
    }else{
      invalidCredentialsUpdate(true)
      return;
    }
  }
  let onLoginHandler = (e)=>{
    e.preventDefault();
    let usrname = username.current.value;
    let passwrd = password.current.value;
    let isValidUser = authCredentialaValidation({username:usrname,password:passwrd})
    if(isValidUser){
      navigate('/home')
    }else{
      return false;
    }
  }
    return(
        <React.Fragment>
          <h1>Login in to homeBITES</h1>
          <form onSubmit={onLoginHandler}>
            <div className='row'>
              <div className='col'>
                  <label htmlFor='username'>Username</label>
                  <input ref={username} type="text" placeholder='email or phone' onInput={onInputChange}/>
              </div>
              <div className='col'>
                  <label htmlFor='username'>Password</label>
                  <input ref={password} type="text" placeholder='your password' onInput={onInputChange}/>
              </div>
              <button type='submit' disabled={isFormValid}>Login</button>
              {invalidCredentials &&
              <p>Please Revalidate your ceredentials</p>
              }
             
            </div>
          </form>
        </React.Fragment>
    )
}