import React from 'react'

export default function Sectionone() {
    return (
        <div className='bg-teal-400 h-auto'>
            <div className='md:flex md:justify-between '>
                <div className='pl-5 pt-10 pb-10 pr-5 md:flex  md:flex-col md:items-start md:justify-center md:pl-12 '>
                    <h1 className="text-gray-800 font-poppins text-7xl font-bold leading-7 pb-10">Hola, </h1>
                    <h2 className="text-white font-poppins text-5xl font-bold leading-14 pb-3">
                        how can we <br/>help?</h2>
                    <h3 className="text-gray-800 font-poppins text-base font-semibold leading-6 pb-1">Do you have any trouble?</h3>
                    <h4 className="text-gray-800 font-poppins text-xs font-medium leading-4">Lorem Ipsum is simply dummy text of the<br/>
                        printing and typesetting  industry. Lorem<br/>
                        Ipsum.</h4>
                </div>
                <div className='hidden md:flex'>
                    <img alt=' ' src="./media/2.svg" />
                </div>

                <div className='hidden md:flex md:items-end'>
                    <img alt=' ' src="./media/1.svg" />
                </div>
            </div>
        </div>
    )
}
