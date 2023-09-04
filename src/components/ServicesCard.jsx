const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 px-10 py-16 sm:w-[350px] w-full rounded-[20px] sm:min-w-[350px] shadow-3xl">
      <div className="flex w-11 h-11 bg-coral-red rounded-full justify-center items-center">
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <h3 className="mt-5 text-2xl font-palanquin font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray break-words leading-normal">
        {subtext}
      </p>
    </div>
  )
}

export default ServicesCard