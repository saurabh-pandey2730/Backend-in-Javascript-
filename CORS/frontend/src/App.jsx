import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
useEffect(()=>{
  axios.get('/api/users')
  .then((res)=>{
    setUsers(res.data)
  })
  .catch((err)=>{

    console.log(err)
  })
})

  return (
    <>
    <h2> Users:{users.length}</h2>
      { users.map((user)=>(
         <div key={users.id}>
           {users.id}
          Name: {user.name}<br/>
          Email :{user.email}<hr />
         </div>
      ))}
    </>
  )
}

export default App
