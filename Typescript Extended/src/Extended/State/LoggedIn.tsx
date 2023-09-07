import { useState } from "react"
export const LoggedIn = () => {
    const [isLoggedIn, setLog] = useState(false)
    const Login = () => {
        setLog(true)
    }
    const Logout = () => {
        setLog(false)
    } 
    return (
        <div>
            <button onClick={Login}> Log In</button>
            <button onClick={Logout}> Log Out</button>
            <div> <h1>User is {isLoggedIn? 'logged in' : 'logged out'}</h1></div>
        </div>
       
    )
}