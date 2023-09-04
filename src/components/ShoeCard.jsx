const ShoeCard = ({imgURL, shoeImg, changeShoeImg}) => {
  const handleClick = () => {
    if (imgURL.bigShoe !== shoeImg) {
      changeShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div 
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${(shoeImg === imgURL.bigShoe) ? "border-coral-red" : "border-transparent"}`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center rounded-xl bg-card bg-cover bg-center sm:w-40 sm:h-40 max-sm:p-4">
        <img 
          src={imgURL.thumbnail}
          alt="Show List"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard