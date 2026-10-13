import React from 'react'
const Navbar = () => {
  return (
    <nav className="flex bg-black sticky backdrop-blur-2xl top-0 overflow-hidden z-5 px-10">
      <img src="logo.png" alt="" className='rounded-3xl p-2 w-16 h-16'/>
<h1 className="group relative inline-block text-3xl text-white my-4 transition-colors duration-300 hover:text-white  hover:cursor-pointer font-['Rye']">
  Bounty List
  <span className="absolute left-0 -top-1 h-0.5 w-0 bg-white  transition-all duration-300 group-hover:w-full"></span>
  <span className="absolute right-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
</h1>
    </nav>
  )
}

export default Navbar
