import { language } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <nav className='flex gap-2 items-center [&>button:last-child]:border-r-0 [&>button:last-child]:pr-0'>
      {language.map((item, index) => (
        <button
          key={index}
          className={`underline-offset-2 border-r decoration-2 cursor-pointer border-white tracking-wide pr-2 ${
            item.title === lan ? 'font-extrabold' : 'font-medium'
          } hover:underline`}
          onClick={() => setLan(item.title)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}

export default Lan
