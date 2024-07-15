import React from 'react'

const SearchComponent = ({handleSearch}) => {
  return (
    <>
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unique-input">filter by name</label
  >
  <input
    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
    placeholder="search by name"
    type="text"
    id="unique-input"
    onChange={handleSearch}
  />
 
    </>
  )
}

export default SearchComponent