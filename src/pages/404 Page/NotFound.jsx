import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-9xl font-bold text-indigo-600 animate-pulse">404</h1>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mt-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                    The page you're looking for seems to have vanished into the digital void.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white 
                    bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300 
                    shadow-lg hover:shadow-indigo-500/50"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Return Home
                </Link>
            </div>
        </div>
    </main>
)
}

export default NotFound