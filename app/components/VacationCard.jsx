

export const VacationCard = ({imageUrl, title, description, link}) => {
    return (
      <div className="card1 w-[650px] h-[515px] bg-[#FFFFFF] text-black">
          <div className="card-image h-2/3 bg-cover bg-center" style={{backgroundImage: `url('${imageUrl}')`}}>
          </div>
          <div className="card-body h-1/3 grid place-items-center">
          <div className="flex flex-col items-center">
              <h3 className="italic text-[1.2rem] mb-3">{title}</h3>
              <p className="description px-10 mb-8 text-center">{description}</p>
              <a href="#" className="font-semibold underline text-[0.9rem]">{link}</a>
          </div>
          </div>
      </div>  
    )
  }