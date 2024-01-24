import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='navbar bg-[#000000] min-w-[1280px] max-w-[100%] h-[100px] flex justify-around items-center'>
                <Link href={'/'}>
                    <img className='w-[180px] ml-[-60px]' src="/Images/MainLogo.svg" alt="" />
                </Link>
                <ul className='list-none text-[#FFFFFF] family font-extrabold text-[20px] flex justify-center gap-[37px]'>
                    <li className='simple'><a href="/">Home</a></li>
                    <li className='simple'><a href="/darts">Darts</a></li>
                    <li className='simple'><a href="#reviews">Reviews</a></li>
                    <li className='simple'><a href="/aboutUs">About US</a></li>
                    <li className='simple'><a href="/contactUs">Contact US</a></li>
                </ul>
                <div className='border-2 border-[#940F0F] w-[243px] h-[46px] rounded-[4px] pt-[10px] pl-[8px]'>
                    <input className='bg-transparent text-[#FFFFFF] outline-none border-none' type="text" placeholder='Search' />
                    <i class="fa-solid fa-magnifying-glass text-[#FFFFFF] pl-[20px] cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar 