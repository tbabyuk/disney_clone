

export const MovieCard = ({imageUrl, description}) => {
    return (
      <div className="card1 w-[250px] h-auto flex flex-col mx-auto">
          <div className="card-image overflow-hidden">
            <img src={imageUrl} className="hover:cursor-pointer hover:transform hover:scale-[103%] duration-300 ease-in-out" />
          </div>
          <p className="description mt-2">{description}</p>
      </div>  
    )
  }