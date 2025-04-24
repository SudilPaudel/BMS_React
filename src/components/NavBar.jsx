import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="bg-gradient-to-r from-gray-800 to-blue-900 shadow-lg border-b border-gray-700 py-3 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto">
                <Link to="/" className="flex items-center space-x-3 group">
                    <img
                        src="https://thumb.silhouette-ac.com/t/98/98033ae05ce2c65620571c567d1ec20f_t.jpeg"
                        className="h-8 mr-3 sm:h-10 rounded-full transform group-hover:scale-110 transition-transform duration-200"
                        alt="Logo"
                    />
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white hover:text-blue-200 transition-colors duration-200">
                        Book Management System
                    </span>
                </Link>
                <div className="flex items-center lg:order-2 space-x-4">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span />
                    </div>
                    <Link
                        to="/addBook"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-6 lg:px-7 py-2.5 lg:py-3 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                    >
                        Add Book
                    </Link>
                    
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar