import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <>
        <footer className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Link to="/" className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="https://thumb.silhouette-ac.com/t/98/98033ae05ce2c65620571c567d1ec20f_t.jpeg"
                            alt="logo"
                            className="w-16 h-16 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    </Link>
                    <ul className="text-lg flex items-center justify-center flex-col gap-4 md:flex-row md:gap-8 transition-all duration-500 py-6 mb-4 border-b border-purple-300">
                        <li className="transform hover:-translate-y-1 transition-transform duration-200">
                            <Link to="/" className="text-gray-100 hover:text-white hover:underline decoration-2 underline-offset-4">
                                Book Management System
                            </Link>
                        </li>
                        <li className="transform hover:-translate-y-1 transition-transform duration-200">
                            <Link to="/addBook" className="text-gray-100 hover:text-white hover:underline decoration-2 underline-offset-4">
                                Create Book
                            </Link>
                        </li>
                    </ul>
                    
                    <div className="flex items-center justify-center animate-fade-in"> 
                        <span className="text-sm text-gray-100 hover:text-white transition-colors duration-300">
                            © <Link to={"/"} className="hover:text-white">Book Management System</Link> 2025, All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}

export default Footer