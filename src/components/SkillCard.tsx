import React from 'react'
import { motion } from 'framer-motion'
import { fadeInTextVariant } from '../animation/animation'

type PropsType = {
  title: string
  img: string
}

const Skill = ({ title, img }: PropsType) => {
  return (
    <motion.div
      variants={fadeInTextVariant}
      initial="hidden"
      whileInView="visible"
      className="w-[90px] h-[130px] hover:bg-[#1d232d] transition duration-150 ease-in-out cursor-pointer flex flex-col justify-center items-center shadow-md gap-1"
    >
      <img className="w-full h-[85px] object-cover" src={img} alt="" />
      <p className="text-gray-300">{title}</p>
    </motion.div>
  )
}

export default Skill
