import React from 'react'
import { motion } from 'framer-motion'
import { fadeInTextVariant } from '../animation/animation'

const GithubStats = () => {
  return (
    <motion.div
      variants={fadeInTextVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full flex flex-col gap-7"
    >
      {/* Title */}
      <div className="w-[95%] lg:w-[60%] m-[auto] flex justify-start items-center gap-[10px] mb-[25px]">
        <p className="text-white text-[25px] md:text-[30px] font-bold font-mono">
          Github Statistics
        </p>
        <div className="h-[1px] w-[340px] bg-gray-800" />
      </div>
      {/* Stats */}
      <div className="w-full flex justify-center">
        <img
          className="w-[95%] md:w-[80%] lg:w-[50%]"
          src="https://github-readme-streak-stats.herokuapp.com?user=ShrikantJawla&hide_border=true&border_radius=5&fire=DD3704&theme=deepBlue"
          alt="github statistics"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-5 items-center justify-center">
        <img
          className="w-[95%] md:w-[80%] lg:w-[37.5%]"
          src="https://github-readme-stats.vercel.app/api?username=shrikantjawla&count_private=true&show_icons=true&bg_color=1c1d1c&text_color=ffffff&title_color=ffffff&icon_color=ffffff"
          alt="github statistics"
        />
        <img
          className="w-[95%] md:w-[80%] lg:w-[31.5%]"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=shrikantjawla&show_icons=true&theme=light&bg_color=1c1d1c&title_color=ffffff&text_color=ffffff&locale=en&layout=compact"
          alt="github statistics"
        />
      </div>
    </motion.div>
  )
}

export default GithubStats
