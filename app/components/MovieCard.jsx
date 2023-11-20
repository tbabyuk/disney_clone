

export const MovieCard = ({imageUrl, description}) => {
    return (
      <div className="card1 w-[280px] h-auto flex flex-col mx-auto">
          <div className="card-image">
            <img src={imageUrl} />
          </div>
          <p className="description mt-2">{description}</p>
      </div>  
    )
  }