import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../../firebase"
import "./style.scss"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const signIn = (e: React.FormEvent) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e: React.FormEvent) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='Amazon Logo'
                    className='login-logo'
                />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login-signin-btn">Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className="login-register-btn">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
