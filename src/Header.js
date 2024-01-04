import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const StyledText = styled.a`
    color: #F4F4F6;
    font-family: 'Poppins', sans-serif; 
    font-size: 1rem; 
    font-weight: 500; 
`;

export default function Header() {
    const [panel1Open, setPanel1Open] = useState(false);
    const togglePanel = (panel) => {
        switch (panel) {
            case 'panel1':
                setPanel1Open(!panel1Open);
                break;
        }
    };

    return (
        <div>
            <div>
                <header className='relative p-2 bg-gray-800 shadow-md'>
                    <div className="w-full h-16 mx-auto flex items-center justify-end">
                        <ul className="hidden lg:flex lg:gap-20 lg:items-center lg:mr-5">
                            <li> <StyledText style={{backgroundColor:'blue'}}> home</StyledText></li>
                            <li> <StyledText >Our Service</StyledText></li>
                            <li><img alt=' ' src="./media/1.png" /></li>
                            <li> <StyledText >About Us</StyledText></li>
                            <li> <StyledText >Contact</StyledText></li>
                            <li><button className='rounded-full border border-teal-500 w-32 h-9 flex-shrink-0 grid place-items-center bg-gray-800 '>
                                <h1 className='text-teal-500 font-poppins text-xs font-medium leading-7'>Become a ryle</h1></button></li>
                        </ul>
                        <div className="lg:hidden text-gray-300 text-xl cursor-pointer mr-3" onClick={() => togglePanel('panel1')}>
                            <FontAwesomeIcon icon={panel1Open ? faXmark : faBars} />
                        </div>
                    </div>
                    <div className='lg:hidden flex gap-4'>
                        <img alt=' ' src="./media/1.png" className='absolute bottom-4' />
                        <div className='lg:hidden absolute top-15 right-3 z-1 w-64 h-380 bg-white backdrop-filter backdrop-blur-md border border-gray-200 rounded-md overflow-hidden transition-height duration-200 ease-in-out pb-8' style={{ display: panel1Open ? 'block' : 'none' }}>
                            <li className='list-none p-1.75 flex items-center justify-center mt-4'><a href="#" className='text-black font-poppins text-base font-medium no-underline'>Home</a></li>
                            <li className='list-none p-1.75 flex items-center justify-center mt-4'><a href="#" className='text-black font-poppins text-base font-medium no-underline'>Our services</a></li>
                            <li className='list-none p-1.75 flex items-center justify-center mt-4'><a href="#" className='text-black font-poppins text-base font-medium no-underline'>About Us</a></li>
                            <li className='list-none p-1.75 flex items-center justify-center mt-4'><a href="#" className='text-black font-poppins text-base font-medium no-underline'>Contact</a></li>
                            <li className='list-none p-1.75 flex items-center justify-center mt-4'><button className='rounded-md border border-teal-500 w-32 h-9 flex-shrink-0 grid place-items-center bg-gray-800 '>
                                <h1 className='text-teal-500 font-poppins text-xs font-medium leading-7'>Become a ryle</h1></button></li>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
