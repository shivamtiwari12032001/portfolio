import axios from 'axios'
import { motion } from 'framer-motion'
import { fadeInTextVariant } from '../animation/animation'

interface Props {}

const HomeSection = (props: Props) => {
  const trackDownload = async () => {
    await axios.post('https://puce-bored-bass.cyclic.app/track/button', {})
  }
  return (
    <div
      id="about__part"
      className="w-full min-h-[900px] md:min-h-[720px] bg-[#040506] pt-[100px] lg:pt-[90px] relative z-[1]"
    >
      {/* Blue color Box left side absolute */}
      <div className="w-[55%] z-[2] md:w-[40%] h-[100%] bg-blue-600 opacity-[0.4] absolute left-0 top-0"></div>
      {/* Background picture */}
      <div className="absolute z-[-1] top-0 opacity-60 left-0 bottom-0 w-full h-[100%]">
        <img
          className="w-full h-[100%] object-cover"
          src="/home-bg.jpg"
          alt=""
        />
      </div>
      {/* Main div consisting photo and text */}
      <div
        style={{ transform: 'translate(-50%,-50%)' }}
        className="w-[95%] z-[4] xl:w-[85%] space-y-[20px] lg:space-y-0 absolute top-[50%] left-[50%] h-fit lg:h-[500px] m-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-600 rounded-2xl md:rounded-none md:rounded-br-[25%] md:rounded-tl-[25%] p-[5px] py-[35px] lg:py-[5px] flex flex-col md:flex-row justify-center items-center shadow-2xl"
      >
        {/* Text div */}
        <div className="w-[85%] lg:w-[60%] flex flex-col justify-center items-center space-y-3 pl-[20px]">
          <p className="w-full px-4 text-[16px] text-gray-200">I'm</p>
          <div className="w-full flex flex-col ">
            <p className="w-full px-4 text-4xl md:text-5xl xl:text-6xl text-white font-firaCode font-bold">
              Shivam Kumar
            </p>
            <p className="w-full px-4 text-[13px] md:text-[16px] xl:text-xl text-red-200">
              {'> Full Stack Web Developer'}
            </p>
          </div>
          <p className="w-full px-4 text-[12.5px] md:text-left xl:text-[15px] text-white ">
            Aspiring Full Stack Web Developer equipped with problem-solving and
            user-centric attitude. Has a deep interest in IT and is capable of
            writing code in NextJS, React, Redux, HTML, and CSS, on the front
            end, Node JS and Express Js on the backend. A team player and
            intensely interested in obtaining a Web developer position to work
            on enhancing the product experience.
          </p>
          <button
            onClick={trackDownload}
            className="self-start w-fit md:w-[150px] border-blue-500 border text-gray-100 hover:text-white p-[10px] px-[35px] ml-4 hover:border-white"
          >
            <a
              href="https://github.com/ShrikantJawla/Resume/raw/main/Shrikant_Jawla_Resume.pdf"
              download="Shrikant_Jawla_Resume"
            >
              RESUME
            </a>
          </button>
        </div>
        {/* Image Div */}
        <motion.div
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          className="w-[50%] md:w-[40%] pr-6 h-full flex justify-center items-center"
        >
          <img
            className="rounded-full h-[60%] object-cover xl:h-[70%] opacity-80 border-[9px] border-blue-300"
            src=""
            alt="me"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HomeSection
