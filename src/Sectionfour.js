import React from 'react'

export default function Sectionfour() {
    return (
        <div className='pr-5 pl-5 pt-20 md:flex md:gap-10 md:pt-20 md:pl-20'>

            <div className='flex-1 flex-col pt-3'>
                <h1 className='text-black font-poppins text-5xl font-bold leading-18'>Avalaible for ios<br />
                    and Android</h1>
                <p className='text-black font-roboto text-base font-normal leading-7.5 pt-6 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.</p>
                <div className='flex gap-6 pt-10 pl-4 flex-wrap'>
                    <button className='w-40 h-14 flex-shrink-0 rounded-full border border-black bg-black flex items-center justify-center'>
                        <div className='flex gap-3'>
                            <img alt=' ' src="./media/12.svg" className='w-5.5 h-6.25 flex-shrink-0 relative top-6.25' />
                            <div className='flex flex-col'>
                                <h1 className='text-white font-roboto text-xs font-normal leading-2 relative top-3.75'>Download on the</h1>
                                <h2 className='text-teal-400 font-poppins text-xs font-medium relative text-left top--1.5 line-height-10'>App Store</h2>
                            </div>
                        </div>
                    </button>
                    <button className='w-40 h-14 flex-shrink-0 rounded-full border border-black bg-black flex items-center justify-center'>
                        <div className='flex gap-3'>
                            <img alt=' ' src="./media/11.svg" className='w-5.5 h-6.25 flex-shrink-0 ' />
                            <div className='flex flex-col'>
                                <h1 className='text-white font-roboto text-xs font-normal leading-2'>Download on the</h1>
                                <h2 className='text-teal-400 font-poppins text-xs font-medium relative text-left top--1.5 line-height-10'>Google Play Store</h2>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className='hidden md:flex-1 md:flex md:items-end md:justify-end md:pr-12'>
                <img alt=' ' src="./media/10.svg" />
            </div>
        </div>
    )
}
