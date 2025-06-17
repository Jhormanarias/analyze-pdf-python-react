import { TableUsers } from '../components/TableUsers';
import React, { useEffect, useState } from 'react'

export const Users = () => {

    const [users, setusers] = useState(null);

    const getUsers = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=>{
            setusers(json);
        })
    }

    useEffect(() => {
      getUsers();
    }, [])
    


  return (
    <div>
        {
            users!=null && (
                <TableUsers users={users}/>
            )
        }
    </div>
  )
}
