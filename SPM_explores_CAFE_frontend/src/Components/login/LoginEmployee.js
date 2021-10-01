import React, {useState} from 'react'
import axios from 'axios';

function Login() {
    const [employee, setEmployee] = useState({
        email:'', password: ''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setEmployee({...employee, [name]:value})
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/emp/login', {...employee})

            localStorage.setItem('firstLogin', true)

            window.location.href = "/dashboard_manager";

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <div className="empIcon">
                <h4>Login</h4>
            </div>
            <hr />
            <form onSubmit={loginSubmit} style={{marginTop:'20px'}}>
                <input type="email" name="email" required placeholder="Email" value={employee.email}
                    onChange={onChangeInput} />

                <input type="password" name="password" required placeholder="Password" value={employee.passwordmail}
                    onChange={onChangeInput} autoComplete="on" />

                <div className="row">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
