import {headerLogo} from '../assets/images'
import {navLinks} from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='absolute padding-x py-8 w-full z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo}
            alt="Logo" 
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block hover:cursor-pointer'>
          <img 
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav