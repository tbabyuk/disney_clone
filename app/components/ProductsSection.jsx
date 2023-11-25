import { Card1 } from "./Card1"


export const ProductsSection = () => {

  return (
        <section className="products-section py-12 flex justify-center flex-wrap gap-5 bg-[#F1F2F3]">
            <Card1 imageUrl="/images/section_2_image_1.jpeg" title="Wish" description="Disney's Wish is Coming Only to Theaters November 22" link="GET TICKETS NOW" />
            <Card1 imageUrl="/images/section_2_image_2.jpeg" title="New on Disney+" description="Dashing Through the Snow Is Now Streaming" link="STREAM NOW" />
            <Card1 imageUrl="/images/section_2_image_3.jpeg" title="shopDisney" description="Celebrate 10 Years of Frozen with Dolls, Apparel, and More!" link="SHOP NOW" />
            <Card1 imageUrl="/images/section_2_image_4.jpeg" title="Adventures by Disney&reg;" description="Embark on Winter Adventures with Savings of Up to $350 per Person on Select Land Adventures Departures" link="LEARN MORE" />
        </section>  
    )
}