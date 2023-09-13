'use client'
import LikeButton from '../components/LikeButton'
import apirations from '../moks/apirations.json'
import { useSort } from '../hooks/useSort'

export default function Aspirations () {
  const { sortElements, activeSort } = useSort(apirations)
  const handleChangeSort = () => activeSort()
  return (    
    <ul className='bg-slate-800 p-4 rounded-lg shadow-md mb-5'>
      <button className='mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleChangeSort}>Sort</button>
      {sortElements.map((apiration) => (
        <li key={apiration.id}>
          <h2 className='className=text-xl font-semibold'>
            {apiration.title}
          </h2>
          <p className='text-gray-600'>{apiration.content}</p>
          <LikeButton />
        </li>
      ))}
    </ul>
  )
}
