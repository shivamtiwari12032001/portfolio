import { CgClose } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { State } from '../redux/store'

interface Props {
  isOpen: boolean
  updateIsOpen: Function
}

const ImageModel = ({ isOpen, updateIsOpen }: Props) => {
  const { image } = useSelector((s: State) => s.displayModel)
  return (
    <>
      {isOpen && (
        <div className="w-full lg:w-[80%] h-[80vh] fixed top-[12%] left-[50%] translate-x-[-50%] shadow-lg bg-white z-[19] border-[5px] border-[#0d1116]">
          <div className="relative">
            <CgClose
              onClick={() => updateIsOpen()}
              className="absolute text-red-700 top-5 right-6 text-[45px] z-[20] cursor-pointer"
            />
          </div>
          <img
            className="h-full w-full object-contain"
            src={image}
            alt="selected"
          />
        </div>
      )}
    </>
  )
}

export default ImageModel
