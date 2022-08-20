import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Okan, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                        My longest experience is in Python and SQL, I learned both during my time at secondary school and sixth-form, this kick started my journey
                        into being an accomplished developer. I chose to study Computer Science as a degree and now have increaed my technological portfolio, having learned
                        languages for full-stack development such as HTML, CSS and JavaScript.
                        My goal is to continue to work hard and pursue a successful career within the field and ensure that my
                        fullest potential is reached.
                    </p>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;