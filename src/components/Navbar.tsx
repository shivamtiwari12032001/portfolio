import axios from 'axios'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import HamBurgerNav from './HamBurgerNav'

const navLinksWithScrollMapping = [
  {
    name: '_About',
    minPos: 0,
    maxPos: 599,
    link: 'about__part',
  },
  {
    name: '_Skills',
    minPos: 600,
    maxPos: 2599,
    link: 'skills__part',
  },
  {
    name: '_Projects',
    minPos: 2600,
    maxPos: 3999,
    link: 'project__part',
  },
  {
    name: '_Contacts',
    minPos: 4000,
    maxPos: 9000,
    link: 'contact__part',
  },
]
const trackDownload = async () => {
  await axios.post('https://puce-bored-bass.cyclic.app/track/button', {})
}

const Navbar = ({ scrollPosition }: { scrollPosition: number }) => {
  // const [active, setActive] = useState<string>('#040506')
  const [active, setActive] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      // windowHeight > 56 ? setActive('#13151a') : setActive('#040506')
      windowHeight > 56 ? setActive(true) : setActive(false)
    }
  }
  return (
    <div
      className={`h-[90px] py-1 px-10 flex justify-between fixed top-0 left-0 right-0 z-[300] ${
        active &&
        'bg-clip-padding backdrop-filter bg-black md:backdrop-blur-xl bg-opacity-60'
      } `}
    >
      <div className="w-[80px] h-full flex justify-center items-center">
        <img
          className="w-[50px]"
          src="https://github.com/ShrikantJawla/Images/blob/main/logo.png?raw=true"
          alt="logo"
        />
      </div>
      <div className=" w-fit flex justify-center items-center space-x-8 ">
        {navLinksWithScrollMapping.map((item, ind) => (
          <a
            href={`#${item.link}`}
            className={`nav_btn hidden sm:flex ${
              scrollPosition <= item.maxPos &&
              scrollPosition >= item.minPos &&
              'text-red-500 font-extrabold'
            } font-[FiraCode] text-white text-[20px]`}
            key={uuidv4()}
          >
            {item.name}
          </a>
        ))}
        <a
          onClick={trackDownload}
          href="https://github.com/ShrikantJawla/Resume/raw/main/Shrikant_Jawla_Resume.pdf"
          download="Shrikant_Jawla_resume"
          className="uppercase text-[12px] hover:text-blue-500 transition duration-200 ease-in-out hover:scale-105 hidden sm:flex border-[1px] border-sky-600 p-2 px-4 text-sky-600 cursor-pointer"
        >
          resume
        </a>
        <HamBurgerNav />
      </div>
    </div>
  )
}

export default Navbar
