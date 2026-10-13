import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return ( <footer className="flex justify-between h-24 sm:h-17 items-center bg-black text-sm text-white">
     <div className="px-1 text-xs sm:text-sm">
  <span className="sm:hidden">© 2026 Bounty List</span>
  <span className="hidden sm:inline">
    © 2026 My Bounty List · Built with ❤️ using React and Tailwind CSS
  </span>
</div>
     <div className='flex gap-3 px-2'>
      <a href="https://www.linkedin.com/in/raktim-bhuyan-9703582bb" className="hover:text-[#FFDF00] transition-colors"><FaLinkedin size={24}/></a>
        <a
          href="https://github.com/Raktimbhuyan"
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
