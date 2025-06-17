import React from 'react'
import Table from 'react-bootstrap/Table';

export const TableUsers = ({users}) => {
    
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Phone</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
              {
                  users.map((user) => (

                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{user.username}</td>
                      </tr>
                  ))
              }
      </tbody>
    </Table>
    
  )
}


