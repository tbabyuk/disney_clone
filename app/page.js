"use client"

import Image from 'next/image'
import { IoPlay } from "react-icons/io5";
import { IoSearchSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from "react-icons/gi"; 
import { useState } from 'react';

// components

import { Card1 } from './components/Card1';
import { TrendingCard } from './components/TrendingCard';
import { VacationCard } from './components/VacationCard';
import { CelebrateSectionSlider } from './components/MoviesSliders';
import { ComingSoonSectionSlider } from './components/MoviesSliders';


export default function Home() {

  const [disneyPlusMenu, setDisneyPlusMenu] = useState(false)
  const [parksTravelMenu, setParksTravelMenu] = useState(false)
  const [moviesMenu, setMoviesMenu] = useState(false)
  const [shopMenu, setShopMenu] = useState(false)
  const [moreMenu, setMoreMenu] = useState(false)

  return (
    <main>

      <div className="header-top relative w-[100%] h-[63px] flex items-center justify-between py-4 px-5 text-[0.9rem] overflow-hidden">
          <GiHamburgerMenu size="1.5rem" className="lg:hidden cursor-pointer" />
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
            <input type="text" className="bg-[#F5F5F5] p-[10px] w-[290px] h-[40px] border-[1px] border-gray-500 border-r-0 rounded-tl rounded-bl" placeholder="Search" />
            <button className="p-[10px] h-[40px] border-[1px] border-gray-500 border-l-0 rounded-tr rounded-br flex items-center"><Image src="/images/search.svg" width="25" height="25" /></button>
          </form>
          <IoSearchSharp size="1.7rem" className="lg:hidden cursor-pointer" />
        {disneyPlusMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[170px]"></div>
        )}
        {parksTravelMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[300px]"></div>
        )}
        {moviesMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[435px]"></div>
        )}
        {shopMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[525px]"></div>
        )}
        {moreMenu && (
            <div className="absolute bg-[#232B2D] text-orange-400 w-3 h-3 transform rotate-45 -bottom-[8px] left-[606px]"></div>
        )}


      </div>

      <div className="hero-section h-[calc(100vh-63px)] overflow-hidden relative">
        <img src="/images/header_image.jpeg" className="hover:cursor-pointer hover:transform hover:scale-[103%] duration-300 ease-in-out" />

        <div className="header-feature-box absolute top-[50%] -translate-y-[50%] left-[115px] flex flex-col items-center">
          <img src="/images/header_movie_title.png" width="450px" />
          <p className="text-white text-[0.9rem] mt-2">Experience <span className="italic">The Marvels</span> now, only in theaters!</p>
          <button className="bg-[#C8D5FC] w-[240px] mt-3 py-3 rounded-3xl text-[0.9rem] font-semibold hover:bg-[#b6c1e4]">Get Tickets Now</button>
          <button className="border w-[240px] mt-3 py-3 rounded-3xl text-[0.95rem] text-white font-semibold flex justify-center items-center hover:bg-gray-500 hover:bg-opacity-50 hover:border-gray-500 hover:border-opacity-50"><IoPlay className="me-2" size="17px" />Watch Trailer</button>
        </div>

        {disneyPlusMenu && (
              <ul className="absolute left-[120px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setDisneyPlusMenu(true)} onMouseLeave={() => setDisneyPlusMenu(false)}>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5 ">On Disney+</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">The Disney Bundle</li>
              </ul>
        )}

        {parksTravelMenu && (
              <ul className="absolute left-[220px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setParksTravelMenu(true)} onMouseLeave={() => setParksTravelMenu(false)}>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">World Disney World Resort</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disneyland Resort</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disney Cruise Line</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Aulani - A Disney Resort and Spa</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Adventures by Disney</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">Disney Vacation Club</li>
              </ul>
        )}

        {moviesMenu && (
              <ul className="absolute left-[380px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setMoviesMenu(true)} onMouseLeave={() => setMoviesMenu(false)}>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">All Movies</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Movies Anywhere</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disney Movie Insiders</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">20th Century Studios</li>
              </ul>
        )}

        {shopMenu && (
              <ul className="absolute left-[480px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setShopMenu(true)} onMouseLeave={() => setShopMenu(false)}>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Sale</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Clothes</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Accessories</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Toys</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">Shop All</li>
              </ul>
        )}

        {moreMenu && (
              <ul className="absolute left-[560px] top-0 bg-[#232B2D] w-fit text-white py-5 px-6 text-[0.85rem]" onMouseEnter={() => setMoreMenu(true)} onMouseLeave={() => setMoreMenu(false)}>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">Disney News</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb] mb-5">D23: The Official Disney Fan Club</li>
                <li className="font-bold hover:cursor-pointer hover:text-[#1786eb]">Live Shows</li>
              </ul>
        )}
      </div>

      <section className="section-2 py-12 flex justify-center flex-wrap gap-5 bg-[#F1F2F3]">
        <Card1 imageUrl="/images/section_2_image_1.jpeg" title="Wish" description="Disney's Wish is Coming Only to Theaters November 22" link="GET TICKETS NOW" />
        <Card1 imageUrl="/images/section_2_image_2.jpeg" title="New on Disney+" description="Dashing Through the Snow Is Now Streaming" link="STREAM NOW" />
        <Card1 imageUrl="/images/section_2_image_3.jpeg" title="shopDisney" description="Celebrate 10 Years of Frozen with Dolls, Apparel, and More!" link="SHOP NOW" />
        <Card1 imageUrl="/images/section_2_image_4.jpeg" title="Adventures by Disney&reg;" description="Embark on Winter Adventures with Savings of Up to $350 per Person on Select Land Adventures Departures" link="LEARN MORE" />
      </section>

      <section className="trending-section bg-[#0A193C] py-8">
          <h2 className="text-[1.8rem] text-white text-center pb-8">Trending on Disney+</h2>
          <div className="flex flex-wrap justify-center gap-5">
            <TrendingCard imageUrl="/images/trending_image_1.jpeg" title="The Santa Clauses" description="Season 2 of the Disney+ Original series is now streaming!" link="STREAM NOW" />
            <TrendingCard imageUrl="/images/trending_image_2.jpeg" title="Marvel Studios' Loki" description="Stream Season 2 now on Disney+." link="STREAM NOW" />
          </div>
      </section>

      <section className="celebrate-section py-12 bg-[#F1F2F3]">
        <h2 className="text-[1.8rem] pb-8 text-center">Celebrate Season's Streamings on Disney+</h2>
        <CelebrateSectionSlider />
      </section>
      <section className="coming-soon-section py-12 bg-[#F1F2F3]">
        <h2 className="text-[1.8rem] pb-8 text-center">Coming Soon to Disney+</h2>
        <ComingSoonSectionSlider />
      </section>

      <section className="vacation-section bg-[#F1F2F3] py-8">
          <h2 className="text-[1.8rem] text-black text-center pb-8">Vacation with Disney Parks</h2>
          <div className="flex flex-wrap justify-center gap-5">
            <VacationCard imageUrl="/images/vacation_section/vacation_image_1.jpeg" title="Walt Disney World&reg; Resort" description="Play, stay and dine with this special offer." link="LEARN MORE" />
            <VacationCard imageUrl="/images/vacation_section/vacation_image_2.jpeg" title="Disneyland&reg; Resort" description="Save up to 15% on select stays now through 12/21/2023 at a Disneyland&reg; Resort hotel." link="LEARN MORE" />
          </div>
      </section>

      <section className="bundle-section h-[70vh] overflow-hidden relative grid place-items-center">
          <img src="/images/bundle_image.jpeg" className="hover:cursor-pointer hover:transform hover:scale-[103%] duration-300 ease-in-out h-full" />
          <div className="absolute text-white text-center max-w-[85vw]">
            <img src="/images/bundle_section/bundle_logo.png" width="350px" className="inline-block" />
            <p className="text-[0.9rem] mt-3">Access your favorite stories, originals and more from Disney+ and Hulu with plans starting at $9.99/month.</p>
            <p className="text-[0.65rem] mt-2">Terms apply*</p>
            <button className="bg-[#0318E4] w-[230px] mt-4 py-3 rounded-3xl text-[0.95rem] font-semibold hover:bg-[#0316c9]">GET THEM BOTH</button>
          </div>
      </section>

      <section className="bundle-bottom-section py-5 bg-[#FFFFFF]">
            <p className="text-[0.75rem] text-center w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto leading-7">*U.S. residents, 18+ only. Access content from each service separately. Location data required to watch certain content. Offer valid for eligible subscribers only. Subject to <span className="underline">Disney+ and ESPN+ Subscriber Agreement</span>. For detailed information on billing and cancelation, please visit the <span className="underline">Disney+ Help Center</span>.</p>
      </section>

      <section className="cards-section min-h-[70vh] bg-[#F1F2F4] overflow-hidden flex flex-col lg:flex-row">
          <div className="py-14 lg:w-[50%] flex items-center hover:cursor-pointer hover:transform hover:scale-[103%] duration-300 ease-in-out">
            <img src="/images/cards_section_image.jpeg" alt="" />
          </div>
          <div className="pb-14 lg:pb-0 grid lg:w-[50%] place-items-center hover:cursor-pointer">
            <div className="text-[#0F2F5E] w-[400px] text-center">
              <h3 className="text-[1.4rem]">Your Disney dream is in the cards</h3>
              <p className="mt-4 text-[0.9rem] leading-6">Special Vacation Financing<br />Enjoy 0% promotional APR for 6 months<br />on select Disney vacation packages.<br /> Terms apply.</p>
              <p className="mt-5 text-[0.9rem] leading-6">Earn a <span className="text-[1.1rem] font-bold">$300</span> statement credit.<br />New Disney&reg; Premier Visa&reg; Cardmembers only.</p>
              <p className="mt-5 text-[1.2rem] font-bold">LEARN MORE</p>
              <p className="mt-2 text-[0.6rem] leading-6">Restrictions apply. &copy; Disney and its related entities.<br />Member FDIC</p>
            </div>
          </div>
      </section>

      <section className="footer-section py-10 bg-[#FFFFFF]">
            <img src="/images/disney_logo.png" className="mx-auto w-[80px]" />
            <ul className="flex justify-center text-[0.7rem] mt-5">
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">About Disney</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Disney Help</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Careers</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Contact Us</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Advertise With Us</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Disney&reg; Premier Visa&reg; Card</a></li>
            </ul>
            <ul className="flex justify-center text-[0.75rem] font-semibold mt-3">
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Terms of Use</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Additional Content Information</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Privacy Policy</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Your US State Privacy Rights</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Children's Online Privacy Policy</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Do Not Sell or Share My Personal Information</a></li>
              <li className="me-6"><a href="#" className="hover:text-[#1786EB]">Interest-Based Ads</a></li>
            </ul>
            <p className="text-[0.7rem] text-center mt-4">&copy; Disney, All Rights Reserved, Disney Entertainment</p>
      </section>


    </main>
  )
}
