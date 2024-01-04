import React from 'react'

export default function Sectionfive() {
    return (
        <div>
            <footer className='w-full h-full flex-shrink-0 bg-gray-800  pb-3 mt-5'>
                <div className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-between  md:pl-12 md:pr-12 '>
                    <img alt=' ' src="./media/13.svg" className=' block item-center  md:hidden pb-6' />
                    <div className='hidden md:w-2/5 md:flex md:flex-col md:relative bottom-9'>
                        <img alt=' ' src="./media/13.svg" className='w-44 h-90 text-left' />
                        <p className='text-white mt-3 font-roboto text-sm font-light leading-5 tracking-wide text-left'>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting,.</p>
                    </div>
                    <div className=' w-full flex justify-between pl-10 pr-10 flex-wrap md:flex-nowrap md:w-2/3 md:mt-3 md:pl-20 md:flex md:justify-between md:pt-16'>
                        <div className='flex flex-col'>
                            <h1 className='text-white mb-4 font-roboto text-base font-normal leading-5 text-left'>Quick Links</h1>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left  relative bottom-4'>Home</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left  relative bottom-6'>Privacy Policy</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-8'>Terms & Conditions</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-10'>Safety</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-12'>Help</h2>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-white mb-4 font-roboto text-base font-normal leading-5 text-left'>About Us</h1>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-4'>Business model</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-6'>Investor relations</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-8'>Careers</h2>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-white mb-4 font-roboto text-base font-normal leading-5 text-left'>Contact Us</h1>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-6 text-left relative bottom-4'>30B, Boeza building, Sub<br />
                                City, Ethopia.</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-6'>+1-098-9876622</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-8'>rlye@gmail.com</h2>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col pl-5 pr-5 '>
                    <div className='bg-gray-700 w-full h-px'>
                    </div>
                    <div className='flex justify-between pt-2 flex-wrap'>
                        <p className='text-white font-roboto text-base font-light  text-left'>All copyrights reserved</p>
                        <div className='flex gap-2 pt-1'>
                            <img alt=' ' src="./media/14.svg" />
                            <img alt=' ' src="./media/15.svg" />
                            <img alt=' ' src="./media/16.svg" />
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
