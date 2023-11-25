import { useState, useEffect } from 'react';

import { IoPlay } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



export const HeroSection = ({menuState}) => {

    const [disneyPlusSubmenu, setDisneyPlusSubmenu] = useState(false)
    const [disneyParksTravelSubmenu, setDisneyParksTravelSubmenu] = useState(false)
    const [disneyMoviesSubmenu, setDisneyMoviesSubmenu] = useState(false)
    const [disneyShopSubmenu, setDisneyShopSubmenu] = useState(false)
    const [disneyLiveShowsSubmenu, setDisneyLiveShowsSubmenu] = useState(false)

    const [
        hamburgerDropdown, 
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
        setMoreMenu
    ] = menuState;


    useEffect(() => {
        // set hamburgerDropdown to false when screen size goes beyond large (optional)
        const handleResize = () => {
            if (window.innerWidth > 1024) {
            setHamburgerDropdown(false)
            }
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    
        }, []);

        
    return (
        <section className={`hero-section h-[calc(100vh-63px)] relative`}>

            <div className="w-full h-full bg-blue-200 overflow-hidden">
                <img src='/images/header_image.jpeg' className="hover:transform hover:scale-[103%] duration-300 ease-in-out h-full object-cover" />
            </div>

            <div className="header-feature-box absolute w-full lg:w-auto top-[50%] -translate-y-[50%] lg:left-[115px] flex flex-col items-center">
            <img src="/images/header_movie_title.png" width="450px" />
            <p className="text-white text-[0.9rem] mt-2">Experience <span className="italic">The Marvels</span> now, only in theaters!</p>
            <button className="bg-[#C8D5FC] w-[240px] mt-3 py-3 rounded-3xl text-[0.9rem] font-semibold hover:bg-[#b6c1e4]">Get Tickets Now</button>
            <button className="border w-[240px] mt-3 py-3 rounded-3xl text-[0.95rem] text-white font-semibold flex justify-center items-center hover:bg-gray-500 hover:bg-opacity-50 hover:border-gray-500 hover:border-opacity-50"><IoPlay className="me-2" size="17px" />Watch Trailer</button>
            </div>


            {/* MOBILE/HAMBURGER MENU FUNCTIONALITY */}

            {hamburgerDropdown && (
                <ul className="lg:hidden absolute top-0 bg-[#232B2D] w-full text-white text-[0.85rem] z-50">
                    <li className="border-t-2 border-t-black border-b-gray-400 bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12">SIGN IN</a></li>
                    <li className="border-t-[2px] border-t-gray-200 bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12">DISNEY.COM</a></li>
                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12 relative" onClick={() => setDisneyPlusSubmenu(!disneyPlusSubmenu)}>DISNEY+{disneyPlusSubmenu ? <IoIosArrowDown className="float-right absolute right-6 text-gray-500" /> : <IoIosArrowForward className="float-right absolute right-6 text-gray-500" />}</a></li>

                    {disneyPlusSubmenu && (
                        <>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-top ps-6">Home</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">On Disney+</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-bottom ps-6">The Disney Bundle</a></li>
                        </>
                    )}

                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12 relative" onClick={() => setDisneyParksTravelSubmenu(!disneyParksTravelSubmenu)}>PARKS & TRAVEL{disneyParksTravelSubmenu ? <IoIosArrowDown className="float-right absolute right-6 text-gray-500" /> : <IoIosArrowForward className="float-right absolute right-6 text-gray-500" />}</a></li>

                    {disneyParksTravelSubmenu && (
                        <>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-top ps-6">Home</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Walt Disney World</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Disneyland</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Disney Cruise Line</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Aulani</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-bottom ps-6">All Parks & Travel</a></li>
                        </>
                    )}

                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12 relative" onClick={() => setDisneyMoviesSubmenu(!disneyMoviesSubmenu)}>MOVIES{disneyMoviesSubmenu ? <IoIosArrowDown className="float-right absolute right-6 text-gray-500" /> : <IoIosArrowForward className="float-right absolute right-6 text-gray-500" />}</a></li>

                    {disneyMoviesSubmenu && (
                        <>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-top ps-6">Home</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">All Movies</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Movies Anywhere</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Disney Movie Insiders</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-bottom ps-6">20th Century Studios</a></li>
                        </>
                    )}

                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12 relative" onClick={() => setDisneyShopSubmenu(!disneyShopSubmenu)}>SHOP{disneyShopSubmenu ? <IoIosArrowDown className="float-right absolute right-6 text-gray-500" /> : <IoIosArrowForward className="float-right absolute right-6 text-gray-500" />}</a></li>

                    {disneyShopSubmenu && (
                        <>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-top ps-6">Sale</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Clothes</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Accessories</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Toys</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-bottom ps-6">Shop All</a></li>
                        </>
                    )}

                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12">DISNEY NEWS</a></li>
                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12">D23</a></li>
                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center hover:bg-gray-100 ps-12 relative" onClick={() => setDisneyLiveShowsSubmenu(!disneyLiveShowsSubmenu)}>LIVE SHOWS{disneyLiveShowsSubmenu ? <IoIosArrowDown className="float-right absolute right-6 text-gray-500" /> : <IoIosArrowForward className="float-right absolute right-6 text-gray-500" />}</a></li>

                    {disneyLiveShowsSubmenu && (
                        <>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-top ps-6">Home</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Disney on Broadway</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center ps-6">Disney on Ice</a></li>
                        <li className="border-t-[2px] border-t-gray-200 bg-[#F5F5F5] text-gray-800 flex items-center h-[60px]"><a href="#" className="w-full h-full flex items-center shadow-bottom ps-6">Disney Live!</a></li>
                        </>
                    )}
                </ul>
            )}


            {/* DESKTOP MENU FUNCTIONALITY */}

            {disneyPlusSubmenu && (
                <ul>
                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]">Home</li>
                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]">On Disney+</li>
                    <li className="border-t-[2px] border-t-gray-200  bg-white text-gray-800 font-bold flex items-center h-[60px]">The Disney Bundle</li>
                </ul>
            )}

            {disneyPlusMenu && (
                <>
                    <div className="absolute bg-[#232B2D] w-3 h-3 transform rotate-45 -top-[5px] left-[170px]" onMouseEnter={() => setDisneyPlusMenu(true)} onMouseLeave={() => setDisneyPlusMenu(false)}></div>

                    <ul className="absolute left-[120px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setDisneyPlusMenu(true)} onMouseLeave={() => setDisneyPlusMenu(false)}>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5 ">On Disney+</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">The Disney Bundle</li>
                    </ul>
                </>
            )}

            {parksTravelMenu && (
                <>
                    <div className="absolute bg-[#232B2D] w-3 h-3 transform rotate-45 -top-[5px] left-[300px]" onMouseEnter={() => setParksTravelMenu(true)} onMouseLeave={() => setParksTravelMenu(false)}></div>

                    <ul className="absolute left-[220px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setParksTravelMenu(true)} onMouseLeave={() => setParksTravelMenu(false)}>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">World Disney World Resort</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disneyland Resort</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disney Cruise Line</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Aulani - A Disney Resort and Spa</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Adventures by Disney</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">Disney Vacation Club</li>
                    </ul>
                </>
            )}

            {moviesMenu && (
                <>
                    <div className="absolute bg-[#232B2D] w-3 h-3 transform rotate-45 -top-[5px] left-[435px]" onMouseEnter={() => setMoviesMenu(true)} onMouseLeave={() => setMoviesMenu(false)}></div>

                    <ul className="absolute left-[380px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setMoviesMenu(true)} onMouseLeave={() => setMoviesMenu(false)}>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">All Movies</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Movies Anywhere</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disney Movie Insiders</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">20th Century Studios</li>
                    </ul>
                </>
            )}

            {shopMenu && (
                <>
                    <div className="absolute bg-[#232B2D] w-3 h-3 transform rotate-45 -top-[5px] left-[525px]" onMouseEnter={() => setShopMenu(true)} onMouseLeave={() => setShopMenu(false)}></div>

                    <ul className="absolute left-[480px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setShopMenu(true)} onMouseLeave={() => setShopMenu(false)}>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Sale</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Clothes</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Accessories</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Toys</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">Shop All</li>
                    </ul>
                </>
            )}

            {moreMenu && (
                <>
                    <div className="absolute bg-[#232B2D] w-3 h-3 transform rotate-45 -top-[5px] left-[606px]" onMouseEnter={() => setMoreMenu(true)} onMouseLeave={() => setMoreMenu(false)}></div>

                    <ul className="absolute left-[560px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]"  onMouseEnter={() => setMoreMenu(true)} onMouseLeave={() => setMoreMenu(false)}>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disney News</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">D23: The Official Disney Fan Club</li>
                        <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">Live Shows</li>
                    </ul>
                </>
            )}

        </section>

    )
}