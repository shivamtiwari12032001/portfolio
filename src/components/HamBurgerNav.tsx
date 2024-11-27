import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

const navLinks = [
  {
    name: '_About',
    link: 'about__part',
  },
  {
    name: '_Skills',
    link: 'skills__part',
  },
  {
    name: '_Projects',
    link: 'project__part',
  },
  {
    name: '_Contacts',
    link: 'contact__part',
  },
]

const HamBurgerNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <GiHamburgerMenu
        className="text-white md:hidden text-xl"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="md:hidden fixed z-[90] right-0 top-0 bottom-0 w-[calc(100vw-70px)] bg-[#121820] transition duration-150 ease-in-out p-7 flex flex-col gap-5 shadow-xl">
          <div className="w-full flex justify-end">
            <VscChromeClose
              onClick={() => {
                setIsOpen(false)
              }}
              className="text-white md:hidden text-[30px] w-fit"
            />
          </div>
          <div className="flex flex-col h-[90%] gap-5 items-center">
            {navLinks.map((item, ind) => (
              <a
                onClick={() => setIsOpen(false)}
                href={`#${item.link}`}
                className="nav_btn font-[FiraCode] uppercase text-white"
                key={ind}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/ShrikantJawla/ShrikantJawla.github.io/raw/main/Resume/Shrikant_Jawla_resume.pdf"
              download="Shrikant_Jawla_resume"
              className="uppercase text-[12px] hover:text-blue-500 transition duration-200 ease-in-out hover:scale-105 sm:flex border-[1px] border-sky-600 p-2 px-4 w-fit text-sky-600 cursor-pointer"
            >
              resume
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default HamBurgerNav
