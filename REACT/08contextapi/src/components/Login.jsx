// import React, { useContext } from 'react';
// import UserContext from '../context/UserContext';

// function Login() {

//    const [Username,setUsername]= React.useState('')
//    const [Password,setPassword]= React.useState('')
//     const {setUser}= useContext(UserContext)
//    const handleSumit=(e)=>{
//     e.preventDefaut()
//     setUser({Username, Password})
//    }

//     return (
//         <div>
//             <h2>Login</h2>
//             <input type="text"
//              value={Username}
//              onChange={(e)=>setUsername(e.target.value)}
//              placeholder='username' />
//             <input type="text" 
//             value={Password} 
//             onChange={(e)=>setPassword(e.target.value)}
//             placeholder='password' />
//             <button onClick={handleSumit}>Submit</button>
//         </div>
//     );
// }

// export default Login;
import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login