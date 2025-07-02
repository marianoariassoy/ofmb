import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Nav from './Nav'
import Lan from './Lan'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header
      className={`fixed top-0 left-0 w-full flex flex-col lg:flex-row gap-4 justify-between lg:items-end z-50   px-4 lg:px-12 bg-black/30 text-white backdrop-blur-md transition-all ${
        scrolled ? 'py-6' : 'pt-12 pb-8'
      }`}
    >
      <div className='flex justify-between'>
        <Link to='/home'>
          <img
            src='/assets/logo.svg'
            alt='logo'
            className={`transition-all ${scrolled ? 'h-12 lg:h-12' : 'h-16 lg:h-20'}`}
          />
        </Link>
        <button
          className='lg:hidden'
          onClick={toggleMenu}
        >
          <svg
            width='30'
            height='18'
            viewBox='0 0 30 18'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              y='0'
              width='30'
              height='1'
              fill='white'
            />
            <rect
              y='8.5'
              width='30'
              height='1'
              fill='white'
            />
            <rect
              y='17'
              width='30'
              height='1'
              fill='white'
            />
          </svg>
        </button>
      </div>
      <div className='flex-col gap-4 lg:gap-2 items-end text-sm hidden lg:flex'>
        <Lan />
        <Nav />
      </div>
      {isOpen && (
        <div
          className='flex-col gap-4 lg:gap-2 items-end text-sm flex'
          onClick={toggleMenu}
        >
          <Lan />
          <Nav />
        </div>
      )}
    </header>
  )
}

export default Header
