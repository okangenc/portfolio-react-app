import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-500'>
                    Hello World! My name is
                </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Okan Genc
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Programmer
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    6+ Years of Computer Science and it never gets old. My passion and drive guides me towards
                    being the best possible programmer I can be, I am currently studying Computer Science at
                    Loughborough University and hope to carry on my knowledge after graduating.
                </p>
                <div>
                    <Link to='about' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>
                            Find Out More
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home