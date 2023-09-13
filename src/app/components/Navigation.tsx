import Link from 'next/link'
const links = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' }
]

export function Navigation () {
  return (
    <header>
      <nav className='border rounded-sm border-sky-500 bg-blue-500  mb-4'>
      <div className='container mx-auto'>
        <ul className='flex justify-end space-x-4'>
          {links.map(({ label, route }) => (
            <li className='bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700' key={label}> <Link href={route}>{label}</Link></li>
          ))}
        </ul>
      </div>
      </nav>
    </header>
  )
}
