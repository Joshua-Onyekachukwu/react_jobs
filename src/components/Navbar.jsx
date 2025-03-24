import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-gray-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link className="flex items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                React Jobs
                            </span>
                        </Link>
                    </div>
                    {/* Navigation Links */}
                    <div className="md:flex space-x-4">
                        <Link
                            to="/"
                            className="text-white hover:bg-white/10 rounded-md px-4 py-2 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/jobs"
                            className="text-white hover:bg-white/10 rounded-md px-4 py-2 transition"
                        >
                            Jobs
                        </Link>
                        <Link
                            to="/add-job"
                            className="text-white hover:bg-white/10 rounded-md px-4 py-2 transition"
                        >
                            Add Job
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
