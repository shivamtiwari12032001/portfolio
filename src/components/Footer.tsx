import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { fadeInTextVariant } from '../animation/animation'

const Footer = () => {
  return (
    <motion.div
      variants={fadeInTextVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full min-h-[450px] md:min-h-[200px] flex flex-col md:flex-row justify-center gap md:gap-4 z-[2] bg-black absolute bottom-0"
    >
      {/* Links Section */}
      <div className="w-full md:w-[40%] h-[50%] md:h-full flex flex-col items-center p-10">
        <p className="text-white w-[40%] ">Links</p>
        <div className="w-[40%] h-fit py-2 flex  gap-5 justify-start items-center">
          <a
            href="https://github.com/shivamtiwari12032001"
            target={'_blank'}
            rel="noreferrer"
          >
            <AiFillGithub className="text-[22px] text-white cursor-pointer hover:scale-125 transition duration-700 ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivamtiwari12032001"
            target={'_blank'}
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-[22px] text-white cursor-pointer hover:scale-125 transition duration-700 ease-in-out" />
          </a>
          <a
            href="https://leetcode.com/u/shivamtiwari12032001"
            target={'_blank'}
            rel="noreferrer"
          >
            <SiLeetcode className="text-[22px] text-white cursor-pointer hover:scale-125 transition duration-700 ease-in-out" />
          </a>
        </div>
      </div>

      {/* Contacts Section  */}
      <div className="w-full md:w-[48%] h-[50%] md:h-full flex flex-col items-center p-10">
        <p className="text-white w-[40%]">Contacts</p>
        <div className="w-[55%] md:w-[40%] h-fit m-[auto] mt-5 flex flex-col items-center justify-center gap-0">
          <div className="w-full h-[20px] flex justify-start items-center gap-3">
            <img
              className="h-[16px]"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
              alt="wattsapp icon"
            />
            <a href="tel:+916201715091" className="text-white text-[12px]">
              +91-6201715091
            </a>
          </div>
          <div className="w-full h-[20px] flex justify-start items-center gap-3">
            <img
              className="h-[16px]"
              src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
              alt="wattsapp icon"
            />
            <a
              href="mailto:shrikantjawla@gmail.com"
              className="text-white text-[12px]"
            >
              shivamtiwari12032001@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
