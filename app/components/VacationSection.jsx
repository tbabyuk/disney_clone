import { VacationCard } from "./VacationCard"


export const VacationSection = () => {

    return (
        <section className="vacation-section bg-[#F1F2F3] py-8">
            <h2 className="text-[1.8rem] text-black text-center pb-8">Vacation with Disney Parks</h2>
            <div className="flex flex-wrap justify-center gap-5">
            <VacationCard imageUrl="/images/vacation_section/vacation_image_1.jpeg" title="Walt Disney World&reg; Resort" description="Play, stay and dine with this special offer." link="LEARN MORE" />
            <VacationCard imageUrl="/images/vacation_section/vacation_image_2.jpeg" title="Disneyland&reg; Resort" description="Save up to 15% on select stays now through 12/21/2023 at a Disneyland&reg; Resort hotel." link="LEARN MORE" />
            </div>
        </section>    
    )
}