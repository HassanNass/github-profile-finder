import './App.css'
import { useState, useEffect } from 'react'
import SearchBar from "./SearchBar.jsx"
import ProfileCard from "./ProfileCard.jsx"

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
        if (data.message == "Not Found") {
          setIsError(true)
          setInfo({})
        } else {
          setInfo(data)
        }
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
      {isLoading ? <p className='loading-msg'>Loading...</p>
                 : info.avatar_url && <ProfileCard info={info} />
      }
      {isError && <p className='error-msg'>User not found, please try again</p>}
    </div>
  )
}

export default App
