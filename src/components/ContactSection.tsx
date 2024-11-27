import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { fadeInTextVariant } from '../animation/animation'
import Footer from './Footer'
import { motion } from 'framer-motion'

const initState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactSection = () => {
  const [input, setInput] = useState(initState)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (
      input.name === '' ||
      input.email === '' ||
      input.subject === '' ||
      input.message === ''
    ) {
      return alert('Please fill the details so that I can reply you back!')
    }
    try {
      setLoading(true)
      const res = await axios.post(
        'https://puce-bored-bass.cyclic.app/mail/sendEmail',
        input,
      )
      setInput(initState)
      if (res.data.status === 1) {
        setLoading(false)
        alert('Email has been successfully sent!.')
      }
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }
  return (
    <div
      id="contact__part"
      className="w-full min-h-[1600px] md:min-h-[1000px] bg-[#0d1116] pt-[10px] lg:pt-[10px] relative"
    >
      {/* Image and title div */}
      <div className="w-full h-[400px] ">
        {/* Title */}
        <img
          className="h-[400px] z-[5] w-full object-cover opacity-[0.6] absolute left-0 right-0 top-0"
          src="https://github.com/ShrikantJawla/Images/blob/main/pexels-johnmark-smith-32307.jpg?raw=true"
          alt=""
        />
        <div className="w-[95%] lg:w-[60%] m-[auto] mt-[100px]">
          <p className="text-white text-[20px] md:text-[30px] font-bold font-mono">
            Let's keep in touch.
          </p>
        </div>
      </div>

      {/* Form div */}

      <motion.div
        variants={fadeInTextVariant}
        initial="hidden"
        whileInView="visible"
        className="w-[97%] md:w-[85%] lg:w-[75%] xl:w-[65%] h-[450px] flex flex-col md:flex-row border-red-600 absolute top-[19%] left-[50%] translate-x-[-50%] shadow-lg z-[12]"
      >
        <div className="w-full md:w-[35%] bg-[#0d1626] pt-5">
          <p className="text-white px-5 font-poppins text-[23px] underline uppercase">
            Contact me
          </p>
          <div className="w-[75%] h-[180px] md:h-[200px] lg:h-[250px] m-[auto] mt-5 flex flex-col items-center justify-center">
            <div className="w-full h-[40px] flex justify-start items-center gap-3">
              <img
                className="h-[25px]"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                alt="wattsapp icon"
              />
              <a href="tel:+919045946661" className="text-white">
                +91-9045946661
              </a>
            </div>
            <div className="w-full h-[40px] flex justify-start items-center gap-3">
              <img
                className="h-[25px]"
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt="wattsapp icon"
              />
              <a
                href="mailto:shrikantjawla@gmail.com"
                className="text-white text-[14px] lg:text[17px]"
              >
                shrikantjawla@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[65%] bg-gray-300 pt-5">
          <p className="text-blue-800 px-5 font-poppins text-[23px] uppercase">
            Send me a message
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 md:p-9 flex flex-col gap-5 h-[380px] justify-center"
          >
            <div className="w-full flex flex-col md:flex-row justify-between gap-5">
              <input
                onChange={({ target }) =>
                  setInput({ ...input, name: target.value })
                }
                value={input.name}
                type="text"
                placeholder="Enter your name"
                className="w-full md:w-[50%] h-[35px] p-2 shadow-lg rounded-sm"
              />
              <input
                onChange={({ target }) =>
                  setInput({ ...input, email: target.value })
                }
                value={input.email}
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-[50%] h-[35px] p-2 shadow-lg rounded-sm"
              />
            </div>
            <input
              onChange={({ target }) =>
                setInput({ ...input, subject: target.value })
              }
              value={input.subject}
              type="text"
              placeholder="Subject"
              className="w-full h-[35px] p-2 shadow-lg rounded-sm"
            />
            <input
              onChange={({ target }) =>
                setInput({ ...input, message: target.value })
              }
              value={input.message}
              type="text"
              placeholder="Message"
              className="w-full h-[120px] p-2 rounded-md shadow-lg"
            />
            <button
              disabled={loading}
              type="submit"
              className="border border-gray-700 hover:border-white h-[35px] hover:text-white font-semibold transition duration-500 ease-in-out uppercase shadow-lg"
            >
              {loading ? 'Sending please wait...' : 'Send'}
            </button>
          </form>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default ContactSection
