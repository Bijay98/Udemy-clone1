import React from 'react'
import logo from '../../assets/udemy.png'
import style from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container-fluid '>
            <main className="form-signin  m-auto">
                <form className={style.container}>
                    <img className="mb-4" src={logo} alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                        </div>
                        <Link to="/admin"><button className="btn btn-primary w-100 py-2" type="submit">Login</button></Link>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                </form>
            </main>

        </div>
    )
}

export default Login
