import { footerLogo } from "../assets/images"
import { socialMedia, footerLinks } from "../constants"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo} 
              alt="App logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center bg-white rounded-full w-12 h-12 cursor-pointer"
              >
                <img src={icon.src} alt={icon.alt}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap lg:gap-10 gap-20">
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {category.title}
              </h4>
              <ul>
                {category.links.map((link) => (
                  <li 
                    key={link.name}
                    className="font-montserrat text-base leading-normal text-white-400 mt-3 hover:text-slate-gray"
                  >
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img 
            src={copyrightSign} 
            alt="copyright sign"
            width={20}
            height={20}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer