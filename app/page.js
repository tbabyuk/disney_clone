"use client"

import Image from 'next/image'
import { IoPlay } from "react-icons/io5";

// components

import { Card1 } from './components/Card1';
import { TrendingCard } from './components/TrendingCard';
import { CelebrateSectionSlider } from './components/MoviesSliders';


export default function Home() {
  return (
    <main>
      <div className="header-top w-[100%] h-[63px] flex items-center justify-between py-4 px-5 text-[0.9rem] overflow-hidden">
        <div className="flex-1 flex items-center">
          <Image src="/images/disney_logo.png" width="90" height="90" alt="Disney Logo" />
          <nav className="ms-5 flex-1">
            <ul className="flex font-bold">
              <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]">DISNEY+</li>
              <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]">PARKS & TRAVEL</li>
              <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]">MOVIES</li>
              <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]">SHOP</li>
              <li className="p-5 hover:cursor-pointer hover:text-[#1786eb]">MORE</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center float-right">
          <div className="me-5 hover:cursor-pointer">SIGN IN</div>
          <form className="flex items-center">
            <input type="text" className="bg-[#F5F5F5] p-[10px] w-[290px] h-[40px] border-[1px] border-gray-500 border-r-0 rounded-tl rounded-bl" placeholder="Search" />
            <button className="p-[10px] h-[40px] border-[1px] border-gray-500 border-l-0 rounded-tr rounded-br flex items-center"><Image src="/images/search.svg" width="25" height="25" /></button>
          </form>
        </div>
      </div>
      <div className="hero-section h-[calc(100vh-63px)] overflow-hidden relative">
        <img src="/images/header_image.jpeg" className="hover:cursor-pointer hover:transform hover:scale-[103%] duration-300 ease-in-out" />

        <div className="header-feature-box absolute top-[50%] -translate-y-[50%] left-[115px] flex flex-col items-center">
          <img src="/images/header_movie_title.png" width="450px" />
          <p className="text-white text-[0.9rem] mt-2">Experience <span className="italic">The Marvels</span> now, only in theaters!</p>
          <button className="bg-[#C8D5FC] w-[240px] mt-3 py-3 rounded-3xl text-[0.9rem] font-semibold hover:bg-[#b6c1e4]">Get Tickets Now</button>
          <button className="border w-[240px] mt-3 py-3 rounded-3xl text-[0.95rem] text-white font-semibold flex justify-center items-center hover:bg-gray-500 hover:bg-opacity-50 hover:border-gray-500 hover:border-opacity-50"><IoPlay className="me-2" size="17px" />Watch Trailer</button>
        </div>
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
        <CelebrateSectionSlider />
      </section>
    </main>
  )
}
