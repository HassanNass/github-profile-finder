import './App.css'
import { useState, useEffect } from 'react'
import SearchBar from "./SearchBar.jsx"

function App() {
  const [username, setUsername] = useState("")
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  function handleSearch(user) {
    setUsername(user)
  }

  useEffect(() => {
    async function fetchProfile() {
      if (!username) return
      try{
        setIsError(false)
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        setInfo(data)
        setIsLoading(false)
      }
      catch{
        setIsError(true)
        setIsLoading(false)
      }
    }
    fetchProfile()
  }, [username])

  return(
    <div className="container">
      <h1 className="main-header">GitHub Profile Finder</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  )
}

export default App
