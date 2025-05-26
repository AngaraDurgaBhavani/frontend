import React from 'react'

function Main() {
    return (
        <div className='h-screen  w-screen  bg-[url("bike1.webp")]  bg-no-repeat  bg-cover'>
            <h1 className='text-white ml-15  pt-15 font-sans text-5xl' > <span className='block'>High Performance</span><br /> Sports E-bike </h1>
            <div className='float-right mr-15' >
                <p className='text-white translate-y-[-100px] font-light text-sm'>when you check out the design of an ebike.it's easy<br /> to get sidetracked by the engaging features it offers.</p>
                <div className='w-full bg-[rgb(167,167,167)]  rounded-full h-0.5  translate-y-[-80px] '>
                    <div className='bg-white h-0.5 rounded-full w-[35%]'></div>
                    <div className='flex text-white font-light text-sm pt-5'><div className='flex '><span ><img src='number-1.png' className='h-4 ' /></span><span className='translate-y-[-4px]'> <img src='minus.png' className='h-6 ' /></span><span><img src='four.png' className='h-4 font-light' /></span> </div> <span className='pl-45 translate-y-[-5px] font-medium text-sm'> New Bikes</span></div>
                </div>
            </div>
            <div className='flex  text-white  '>
                <p className='pt-10 pl-13 pb-5'><span className='text-xl '>700W</span><br /> <span className='font-light text-xs '>Max Power</span> </p>
                <p className='pt-10 pl-13'><span className='text-xl '>32KM</span><br /> <span className='font-light text-xs'>Battery Range</span> </p>

            </div>
            <div className='pl-14 pt-5'> <button className='bg-white text-black px-4 py-2 flex  font-medium'>Buy Product &nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            </button>
            </div>
            <div className='float-end'><button className='mr-20 border border-white px-3 py-2' ><img src='heart.png' height={25} width={25} /></button>
            </div>
        </div>

    )

}
export default Main
