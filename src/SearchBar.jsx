import { useState } from "react"

function SearchBar({ onSearch }) {
	const [user, setUser] = useState("")

	function handleUser(e) {
		setUser(e.target.value)
	}

	return(
		<div className="search-bar-container">
			<input 
				type="text"
				className="search-input"
				placeholder="Enter a username..."
				value={user}
				onChange={handleUser}
			/>
			<button
				className="btn-search"
				onClick={() => onSearch(user)}
			>
				Search
			</button>
		</div>
	)
}

export default SearchBar
