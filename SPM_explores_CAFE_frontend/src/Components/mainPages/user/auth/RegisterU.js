import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function RegisterU() {

    const [user, setUser] = useState({
        name:'', email:'',mobile:'',role:'', password:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value })
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = "/menu";
        }catch (err){
            alert(err.response.data.msg)
        }
    }

    return (
        <>
        <div className="login-page-user">
            <form onSubmit={registerSubmit}>

                <h2>Register</h2>

                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput}/>


                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>

                
                <input type="number" name="mobile" required
                placeholder="Mobile Number" value={user.mobile} onChange={onChangeInput}/>

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>

                
                {/* <input type="number" name="role" required autoComplete="on"
                placeholder="Role" value={user.role} onChange={onChangeInput}/> */}

                <div className="row">
                        <button type="submit">REGISTER </button>
                        <Link to="/login">Login</Link>
                </div>
            </form>
           
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/19/plate-303475_960_720.png" alt='staff' className='regImage' />  
        </div>
        </>
    )
}
