"use client"

import { useState } from 'react';


// components
import { DesktopNavbar } from './components/DesktopNavbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { TrendingSection } from './components/TrendingSection';
import { CelebrateSection } from './components/CelebrateSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { VacationSection } from './components/VacationSection';
import { BundleSection } from './components/BundleSection';
import { BundleBottomSection } from './components/BundleBottomSection';
import { CardsSection } from './components/CardsSection';
import { Footer } from './components/Footer';


export default function Home() {

  const [disneyPlusMenu, setDisneyPlusMenu] = useState(false)
  const [parksTravelMenu, setParksTravelMenu] = useState(false)
  const [moviesMenu, setMoviesMenu] = useState(false)
  const [shopMenu, setShopMenu] = useState(false)
  const [moreMenu, setMoreMenu] = useState(false)
  const [hamburgerDropdown, setHamburgerDropdown] = useState(false)

  const menuState = [
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
  ]


  return (
      <main>
          <DesktopNavbar menuState={menuState} />
          <HeroSection menuState={menuState} />
          <ProductsSection />
          <TrendingSection />
          <CelebrateSection />
          <ComingSoonSection />
          <VacationSection />
          <BundleSection />
          <BundleBottomSection />
          <CardsSection />
          <Footer />
      </main>
    )
}
