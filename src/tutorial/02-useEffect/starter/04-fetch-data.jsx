import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      console.log(response)
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
      } else {
        throw new Error('There was an error loading content')
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setError('Error!')
    }
  }
  // For side-effects we use useEffect() hook e.g, making an API call
  useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) {
    return <h1>loading ...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  const renderUsers = users.map(user => (
    <div
      className="user"
      key={user.id}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
      />
      <p>{user.login}</p>
    </div>
  ))

  return (
    <section>
      <div className="users">{users.length > 0 && renderUsers}</div>
    </section>
  )
}
export default FetchData
