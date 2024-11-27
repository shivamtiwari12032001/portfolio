import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import loading5 from '../utils/9844-loading-40-paperplane.json'
import loading1 from '../utils/93039-hand-loading-animation.json'
import loading2 from '../utils/93816-loading.json'
import loading3 from '../utils/97123-loading-loading-loading.json'
import loading4 from '../utils/98432-loading.json'

let files = [loading1, loading2, loading3, loading4, loading5]

type Files = typeof files

interface Props {}

export const Loading = (props: Props) => {
  const [visible, setVisible] = useState<string>('')

  useEffect(() => {
    let id: NodeJS.Timeout
    id = setTimeout(() => {
      setVisible('hidden')
    }, 3000)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <div
        className={`${visible} w-full h-[100vh] fixed top-0 right-0 bg-black z-[500] flex justify-center items-center`}
      >
        <Lottie animationData={getRandomInt(files, 4)} />
      </div>
    </>
  )
}

function getRandomInt(arr: Files, max: number) {
  let val = 1 + Math.floor(Math.random() * max)
  return arr[val]
}
