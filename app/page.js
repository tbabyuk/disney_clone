import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <div className="header-top w-[100%] h-[63px] flex items-center justify-between py-4 px-5 text-[0.9rem]">
        <div className="flex-1 flex items-center">
          <Image src="/images/disney_logo.png" width="90" height="90" alt="Disney Logo" />
          <nav className="ms-8 flex-1">
            <ul className="flex font-bold">
              <li className="p-5 hover:cursor-pointer">DISNEY+</li>
              <li className="p-5 hover:cursor-pointer">PARKS & TRAVEL</li>
              <li className="p-5 hover:cursor-pointer">MOVIES</li>
              <li className="p-5 hover:cursor-pointer">SHOP</li>
              <li className="p-5 hover:cursor-pointer">MORE</li>
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
    </main>
  )
}
