import React,{useState, useContext} from 'react'
import UserContext from '../Cotext/UserContext'
function Login() {
    const[userName,setuserName] = useState('')
    const[password,setpassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handlesubmit =(e)=>{
e.preventDefault()
setUser({userName,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text'value={userName} onChange={(e)=> setuserName(e.target.value)} placeholder='userName'   />{'   '}
      <input type='text'value={password} onChange={(e)=> setpassword(e.target.value)}  placeholder='password'   />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
