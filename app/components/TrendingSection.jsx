import { TrendingCard } from "./TrendingCard"


export const TrendingSection = () => {

    return (
        <section className="trending-section bg-[#0A193C] py-8">
            <h2 className="text-[1.8rem] text-white text-center pb-8">Trending on Disney+</h2>
            <div className="flex flex-wrap justify-center gap-5">
            <TrendingCard imageUrl="/images/trending_image_1.jpeg" title="The Santa Clauses" description="Season 2 of the Disney+ Original series is now streaming!" link="STREAM NOW" />
            <TrendingCard imageUrl="/images/trending_image_2.jpeg" title="Marvel Studios' Loki" description="Stream Season 2 now on Disney+." link="STREAM NOW" />
            </div>
        </section>
      )
  }