import React from 'react';

function Navbar() {
    return (
        <div className='relative'>
            <div className='flex'><p className=' py-4 pt-10 text-2xl font-serif font-medium flex text-[rgb(32,51,109)] pl-5'> Mebitadio </p>    
                 <div className='pl-300  pt-7 text-gray-500 ' >
                    <button className='m-1'>Home</button><br />
                    <button > Programs</button><br />
                    <button >Free Meditations</button>
                </div>
                <div className='pl-4 pt-7 text-gray-500 '> <button> About </button><br />
                    <button>Blog</button>
                </div>
            </div> 
             <hr className='w-[83%] border-gray-300  '></hr>
            
            <div className='text-center text-gray-500 pt-20'>  \\Guided meditations, breathing<br /> exercises, and mindful journaling ---<br /> all in one calming experience.</div>
            <div className='pl-4 text-gray-500 mt-6 '>[01]</div>
            <div className='font-serif font-bold text-5xl px-60 pt-20'> Anytime,<br /> Anywhere.</div>
            <div className='px-65  pt-25  '> <img src='arrow.svg' height={100} width={100} /></div>
            <div className=' float-end translate-y-[-240px] pr-5 '> <img src='yoga.avif' height={450} width={200} /> </div>

        </div>
    )
}
export default Navbar

