"use client"
import { useEffect } from 'react'

useEffect(()=>{
    alert('loaded')
},[])

function Users() {
  return (
    <div>Users</div>
  )
}

export default Users