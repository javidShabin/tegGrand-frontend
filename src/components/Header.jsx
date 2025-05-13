import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          Timely<span className="text-black">Watch</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to={"/"} className="hover:text-indigo-600 transition">Home</Link>
          <Link className="hover:text-indigo-600 transition">About</Link>
          <Link to={"/products"} className="hover:text-indigo-600 transition">Collection</Link>
          <Link className="hover:text-indigo-600 transition">Contact</Link>
        </nav>

        {/* Buttons / CTA */}
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-indigo-600 hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon (for responsiveness - optional) */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
