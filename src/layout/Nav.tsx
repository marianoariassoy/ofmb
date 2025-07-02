import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Nav = () => {
  const { lan } = useDataContext()

  return (
    <nav className='w-full'>
      <ul className='flex flex-col lg:flex-row gap-4 font-medium [&>li:last-child]:border-r-0 [&>li:last-child]:pr-0'>
        {menu.map((item, index) => (
          <li
            key={index}
            className='lg:border-r border-white pr-4'
          >
            <button
              className='uppercase decoration-2 underline-offset-2 hover:underline tracking-wide cursor-pointer'
              onClick={() => document.getElementById(item.tag)!.scrollIntoView()}
            >
              {lan === 'ESP' ? item.title_es : item.title_en}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
