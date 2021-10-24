import { useState } from 'react'

const Movielist = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <h1>Movie List Page</h1>
            Search : <input type='text' onChange={handleSearchTermChange}/>
            <button>Search</button>
        </div>
    )
}

export default Movielist
