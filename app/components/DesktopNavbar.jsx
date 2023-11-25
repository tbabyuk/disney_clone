"use client"

import Image from "next/image";
import { IoSearchSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";



export const DesktopNavbar = ({menuState}) => {

    const [hamburgerDropdown, 
    setHamburgerDropdown, 
    disneyPlusMenu, 
    setDisneyPlusMenu,
    parksTravelMenu,
    setParksTravelMenu,
    moviesMenu,
    setMoviesMenu,
    shopMenu,
    setShopMenu,
    moreMenu,
    setMoreMenu] = menuState


  return (
    <nav className="nav-section relative w-[100%] h-[63px] flex items-center justify-between py-4 px-5 text-[0.9rem]">
        {hamburgerDropdown ? <CgClose size="1.7rem" className="lg:hidden cursor-pointer" onClick={() => setHamburgerDropdown(false)} /> : <GiHamburgerMenu size="1.5rem" className="lg:hidden cursor-pointer" onClick={() => setHamburgerDropdown(true)} />}
        <a href=""><Image className="mx-auto cursor-pointer" src="/images/disney_logo.png" width="90" height="90" alt="Disney Logo" /></a>
        <nav className="hidden lg:block ms-5 flex-1">
        <ul className="flex font-bold">
            <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]" onMouseEnter={() => setDisneyPlusMenu(true)} onMouseLeave={() => setDisneyPlusMenu(false)}>DISNEY+</li>
            <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]" onMouseEnter={() => setParksTravelMenu(true)} onMouseLeave={() => setParksTravelMenu(false)}>PARKS & TRAVEL</li>
            <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]" onMouseEnter={() => setMoviesMenu(true)} onMouseLeave={() => setMoviesMenu(false)}>MOVIES</li>
            <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]" onMouseEnter={() => setShopMenu(true)} onMouseLeave={() => setShopMenu(false)}>SHOP</li>
            <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]" onMouseEnter={() => setMoreMenu(true)} onMouseLeave={() => setMoreMenu(false)}>MORE</li>
        </ul>
        </nav>
        <div className="hidden lg:block me-5 hover:cursor-pointer">SIGN IN</div>
        <form className="hidden lg:flex items-center">
        <input type="text" className="bg-[#F5F5F5] p-[10px] w-[210px] xl:w-[290px] h-[40px] border-[1px] border-gray-500 border-r-0 rounded-tl rounded-bl" placeholder="Search" />
        <button className="p-[10px] h-[40px] border-[1px] border-gray-500 border-l-0 rounded-tr rounded-br flex items-center"><Image src="/images/search.svg" width="25" height="25" /></button>
        </form>
        <IoSearchSharp size="1.7rem" className="lg:hidden cursor-pointer" />

        {disneyPlusMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[170px]" onMouseEnter={() => setDisneyPlusMenu(true)} onMouseLeave={() => setDisneyPlusMenu(false)}></div>
        )}
        {parksTravelMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[300px]" onMouseEnter={() => setParksTravelMenu(true)} onMouseLeave={() => setParksTravelMenu(false)}></div>
        )}
        {moviesMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[435px]" onMouseEnter={() => setMoviesMenu(true)} onMouseLeave={() => setMoviesMenu(false)}></div>
        )}
        {shopMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[525px]" onMouseEnter={() => setShopMenu(true)} onMouseLeave={() => setShopMenu(false)}></div>
        )}
        {moreMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[606px]" onMouseEnter={() => setMoreMenu(true)} onMouseLeave={() => setDisneyPlusMenu(false)}></div>
        )}
    </nav>
    )
}

