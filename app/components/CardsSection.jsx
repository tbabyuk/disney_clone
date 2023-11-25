

export const CardsSection = () => {

    return (
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
    )
}


