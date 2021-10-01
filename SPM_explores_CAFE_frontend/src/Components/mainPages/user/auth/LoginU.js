import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function LoginU() {

    const [user, setUser] = useState({
        email:'', password:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value })
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post('/csuser/login', {...user})

            localStorage.setItem('firstLogin', true)
            

            
               window.location.href = "/staff";
            
        
            /////////////Testing////////////////
            /* if(user.email == 'staff@explores.com' && user.password == 'staff123*'){
                return (window.location.href = "/staff");
            } */
            // else if(user.email == 'kitchenmgr@gmail.com' && user.password == 'kitchenmgr123*'){
            //     window.location.href = "/";
            // }else if(user.email == 'cashier@gmail.com' && user.password == 'employee123*'){
            //     window.location.href = "/";
            // }
            /* else{
                window.location.href = "/menu"; */
           // }


            ///////////////////Test end////////////////////





            // window.location.href = "/menu";
        }catch (err){
            alert(err.response.data.msg)
        }
    }

    return (
        <>
        <div className="login-page-user">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
             
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>

                <div className="row">
                        <button type="submit">LOGIN </button>
                        {/*<Link to="/register">Register</Link>*/}
                        <Link to="/registerUser" >Register</Link>
                </div>
              
              
            </form>
          
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2016/04/01/09/52/cartoon-1299636_960_720.png" alt='staff' className='loginImage' />  
        </div>
        </>
      
    )
}
