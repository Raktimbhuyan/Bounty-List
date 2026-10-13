import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return ( <footer className="flex justify-between h-24 sm:h-20 sticky bottom-0 items-center bg-black text-sm text-white">
     <div className='px-2'>© 2026 My Bounty List · Built with ❤️</div>
     <div className='flex gap-3 px-2'>
      <a href="mailto:raktimbhuyan001@gmail.com"  aria-label="Email"   className="hover:text-[#FFDF00] transition-colors"><MdEmail size={24}/></a>
        <a
          href="https://www.linkedin.com/in/raktim-bhuyan-9703582bb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#FFDF00] transition-colors"
        >
         <FaGithub size={24}/>
        </a>
     </div>
    </footer>
  
  )
}

export default Footer
