import React from 'react'
const Navbar = () => {
  return (
 <nav className="sticky top-0 z-10 shrink-0 flex h-16 items-center gap-3 bg-black px-4 backdrop-blur-2xl sm:px-10">
      <img src="/logo.png" alt="Bounty List logo" className="h-12 w-12 shrink-0 rounded-3xl sm:h-14 sm:w-14" />
      <h1 className="group relative inline-block cursor-pointer font-['Rye'] text-2xl text-white sm:text-3xl">
        Bounty List
        <span className="absolute left-0 -top-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute right-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </h1>
    </nav>
  )
}

export default Navbar
