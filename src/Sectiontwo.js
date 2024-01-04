import React, { useState } from 'react';
export default function Sectiontwo() {

    const [panel1Open, setPanel1Open] = useState(false);
    const [panel2Open, setPanel2Open] = useState(false);
    const [panel3Open, setPanel3Open] = useState(false);

    const [panel4Open, setPanel4Open] = useState(false);

    const [panel5Open, setPanel5Open] = useState(false);


    const togglePanel = (panel) => {
        switch (panel) {
            case 'panel1':
                setPanel1Open(!panel1Open);
                break;
            case 'panel2':
                setPanel2Open(!panel2Open);
                break;
            case 'panel3':
                setPanel3Open(!panel3Open);
                break;
            case 'panel4':
                setPanel4Open(!panel4Open);
                break;
            case 'panel5':
                setPanel5Open(!panel5Open);
                break;
            default:
                break;
        }
    };


    return (
        <div>
            <div className='flex pr-2 gap-2 lg:pr-30  pt-10 pb-10'>
                <img alt=' ' src="./media/3.svg" className='hidden md:flex-1 md:block md:pl-16'  style={{ height: '222.834px' }} />
                <div className='flex flex-col flex-1 items-start justify-center item-start gap-3 pl-6 '>
                    <h1 className='className="text-gray-800 font-poppins text-5xl font-bold leading-17  '>Frequently Asked
                    </h1>
                    <h1 className='className="text-gray-800 font-poppins text-5xl font-bold leading-7 text-left'>
                        Questions</h1>
                </div>

            </div>

            <div className='flex flex-col justify-between items-center'>
                <div className='w-full  pl-6 pr-6 flex flex-col justify-between md:w-7/12 md:pl-0 md:pr-0'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 w-7/12'>
                            <img alt=' ' src="./media/4.svg" className='w-2' />
                            <h1 className='text-black font-poppins text-lg leading-12'>Why drive with Rlye?</h1>
                        </div>
                        <img alt=' ' src={panel1Open ? "./media/7.svg" : "./media/6.svg"} className='w-3.5' onClick={() => togglePanel('panel1')} />
                    </div>

                    <div className={`w-full h-px bg-gray-800 mt-5 mb-5 ${panel1Open ? 'hidden' : 'block'}`}></div>

                    <div className='flex flex-col items-start justify-start w-full pl-6 pr-6 pt-4' id="panel1" style={{ display: panel1Open ? 'block' : 'none' }}>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est
                            ultricies integer quis. Duis convallis convallis tellusr.
                        </p>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>

                <div className='w-full  pl-6 pr-6 flex flex-col justify-between md:w-7/12 md:pl-0 md:pr-0'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 w-7/12'>
                            <img alt=' ' src="./media/4.svg" className='w-2' />
                            <h1 className='text-black font-poppins text-lg leading-12'>How to request a ride?</h1>
                        </div>
                        <img alt=' ' src={panel2Open ? "./media/7.svg" : "./media/6.svg"} className='w-3.5' onClick={() => togglePanel('panel2')} />
                    </div>

                    <div className={`w-full h-px bg-gray-800 mt-5 mb-5 ${panel2Open ? 'hidden' : 'block'}`}></div>

                    <div className='flex flex-col items-start justify-start w-full pl-6 pr-6 pt-4' id="panel2" style={{ display: panel2Open ? 'block' : 'none' }}>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est
                            ultricies integer quis. Duis convallis convallis tellusr.
                        </p>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>


                <div className='w-full  pl-6 pr-6 flex flex-col justify-between md:w-7/12 md:pl-0 md:pr-0'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 w-7/12'>
                            <img alt=' ' src="./media/4.svg" className='w-2' />
                            <h1 className='text-black font-poppins text-lg leading-12'>What is cancellation fee?</h1>
                        </div>
                        <img alt=' ' src={panel3Open ? "./media/7.svg" : "./media/6.svg"} className='w-3.5' onClick={() => togglePanel('panel3')} />
                    </div>

                    <div className={`w-full h-px bg-gray-800 mt-5 mb-5 ${panel3Open ? 'hidden' : 'block'}`}></div>

                    <div className='flex flex-col items-start justify-start w-full pl-6 pr-6 pt-4' id="panel2" style={{ display: panel3Open ? 'block' : 'none' }}>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est
                            ultricies integer quis. Duis convallis convallis tellusr.
                        </p>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>

                <div className='w-full  pl-6 pr-6 flex flex-col justify-between md:w-7/12 md:pl-0 md:pr-0'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 w-7/12'>
                            <img alt=' ' src="./media/4.svg" className='w-2' />
                            <h1 className='text-black font-poppins text-lg leading-12'>How can I become a Ryle driver?</h1>
                        </div>
                        <img alt=' ' src={panel4Open ? "./media/7.svg" : "./media/6.svg"} className='w-3.5' onClick={() => togglePanel('panel4')} />
                    </div>

                    <div className={`w-full h-px bg-gray-800 mt-5 mb-5 ${panel4Open ? 'hidden' : 'block'}`}></div>

                    <div className='flex flex-col items-start justify-start w-full pl-6 pr-6 pt-4' id="panel2" style={{ display: panel4Open ? 'block' : 'none' }}>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est
                            ultricies integer quis. Duis convallis convallis tellusr.
                        </p>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>

                <div className='w-full  pl-6 pr-6 flex flex-col justify-between md:w-7/12 md:pl-0 md:pr-0'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 w-7/12'>
                            <img alt=' ' src="./media/4.svg" className='w-2' />
                            <h1 className='text-black font-poppins text-lg leading-12'>How can I get a free trip?</h1>
                        </div>
                        <img alt=' ' src={panel5Open ? "./media/7.svg" : "./media/6.svg"} className='w-3.5' onClick={() => togglePanel('panel5')} />
                    </div>

                    <div className={`w-full h-px bg-gray-800 mt-5 mb-5 ${panel5Open ? 'hidden' : 'block'}`}></div>

                    <div className='flex flex-col items-start justify-start w-full pl-6 pr-6 pt-4' id="panel2" style={{ display: panel5Open ? 'block' : 'none' }}>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est
                            ultricies integer quis. Duis convallis convallis tellusr.
                        </p>
                        <p className='text-gray-600 font-poppins text-xs font-medium leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
