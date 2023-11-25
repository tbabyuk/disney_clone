

export const BundleSection = () => {

    return (
        <section className="bundle-section h-[70vh] overflow-hidden relative grid place-items-center">
            <img src="/images/bundle_image.jpeg" alt="Bundle Image" className="hover:cursor-pointer hover:transform hover:scale-[103%] duration-300 ease-in-out h-full" />
            <div className="absolute text-white text-center max-w-[85vw]">
            <img src="/images/bundle_section/bundle_logo.png" width="350px" className="inline-block" />
            <p className="text-[0.9rem] mt-3">Access your favorite stories, originals and more from Disney+ and Hulu with plans starting at $9.99/month.</p>
            <p className="text-[0.65rem] mt-2">Terms apply*</p>
            <button className="bg-[#0318E4] w-[230px] mt-4 py-3 rounded-3xl text-[0.95rem] font-semibold hover:bg-[#0316c9]">GET THEM BOTH</button>
            </div>
        </section>  
    )
}


