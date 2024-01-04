import React from 'react'

export default function Sectionthree() {
    return (
        <div>
            <div className='bg-gray-800 pt-8 pb-8 mt-10'>
                <h1 className='text-teal-400 font-poppins text-2xl font-bold leading-8 text-center  pl-3 pr-3 '>
                    Don’t find an answer to your question?
                </h1>
                <h2 className="text-teal-400 font-poppins text-base font-normal leading-6 text-center pb-10 pl-3 pr-3 pt-1" >
                    Get in touch with us. We will reply you shortly!
                </h2>
                <div className=' flex flex-col gap-6 items-center justify-center md:flex md:flex-row md:gap-24 md:items-center md:justify-center'>
                    <div className='rounded-md border border-white bg-gray-800 w-72 h-44 flex-shrink-0 flex flex-col items-center gap-4 pt-3 '>
                        <img alt=' ' src="./media/9.svg" className='w-10 h-10 flex-shrink-0 ' />
                        <h3 className='text-gray-300 font-poppins text-xs font-normal leading-44'>+(678x) 093 - 89 -98x</h3>
                        <h4 className='text-gray-300 font-poppins text-xs font-normal leading-loose'>We are always happy to help!</h4>
                    </div>
                    <div className='rounded-md border border-teal-400 bg-gray-700 w-72 h-44 flex-shrink-0  flex flex-col items-center gap-4 pt-3'>
                        <img alt=' ' src="./media/8.svg" className='w-10 h-10 flex-shrink-0 ' />
                        <h3 className="text-teal-500 font-poppins text-base font-bold leading-tight">+(678x) 093 - 89 -98x</h3>
                        <h4 className='text-gray-300 font-poppins text-xs font-normal leading-loose'>We are always happy to help!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
