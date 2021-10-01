import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './CSLogin.css'

function CSLogin() {
    const [user, setUser] = useState({
        email: '', password: ''
      })
    
      const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
      }
    
      const loginSubmit = async e =>{
        e.preventDefault()
        try{
          await axios.post('/csuser/login', {...user})
    
          localStorage.setItem('firstLogin', true)
          
          window.location.href = "/side"
    
        }catch(err){
          alert(err)
        }
    
      }
    
        return (
            <div className="login-page">
              <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>
    
                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>  
    
                <div className="row">
                  <button type="submit">Login</button>
                  <Link to="/register">Register</Link>
                </div>
              </form>
            </div>
        );
    };

export default CSLogin
