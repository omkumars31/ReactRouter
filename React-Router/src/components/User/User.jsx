import React from 'react'
import {useParams} from 'react-router-dom'


function User() {
    const {UserId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl'>  User: {UserId}     </div>
  )
}

export default User
