import React,{useState,useEffect} from 'react'

const Fetch = () => {
const [users,setUsers] = useState([]);

useEffect(() => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
  .catch(error=>console.error(error))
},[]);

  return (
    <>
    <h1>User Data</h1>
    {users.map((user) => {
        return <li key={user.id}>{user.login}</li>;
      })}
    </>
  )
}

export default Fetch