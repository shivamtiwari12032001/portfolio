import React from 'react'
import GithubCalender from './GithubCalender'
import GithubStats from './GithubStats'

const Stats = () => {
  return (
    <div className="w-full h-fit z-[1] pb-[150px] md:min-h-[1500px] lg:min-h-[1100px] xl:min-h-[1200px] relative bg-[#0d1116] pt-[100px] lg:pt-[90px] ">
      {/* Background picture */}
      <div className="absolute z-[-1] top-0 opacity-10 left-0 bottom-0 w-full h-[100%]">
        <img
          className="w-full h-[100%] object-cover"
          src="/home-bg.jpg"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[10px]">
        {/* Github Calender */}
        <GithubCalender />
        {/* Github Stats */}
        <GithubStats />
      </div>
    </div>
  )
}

export default Stats
