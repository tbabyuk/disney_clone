import { ComingSoonSectionSlider } from './MoviesSliders';


export const ComingSoonSection = () => {

    return (
        <section className="coming-soon-section py-12 bg-[#F1F2F3]">
            <h2 className="text-[1.8rem] pb-8 text-center">Coming Soon to Disney+</h2>
            <ComingSoonSectionSlider />
        </section>
    )
}