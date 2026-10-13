import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return ( 
  <footer className="mt-auto flex min-h-16 shrink-0 items-center justify-between gap-2 bg-black px-3 py-3 text-white">
     <div className="pmin-w-0 text-[10px] leading-tight sm:text-sm">
  <span className="sm:hidden">© 2026 Bounty List</span>
  <span className="hidden sm:inline">
    © 2026 My Bounty List · Built with ❤️ using React and Tailwind CSS
  </span>
</div>
     <div className='flex gap-3 px-2 shrink-0 items-center'>
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
