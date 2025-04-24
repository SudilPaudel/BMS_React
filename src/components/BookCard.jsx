import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const BookCard = ({book}) => {
    
    return (
        <Link to={`/book/${book._id}`}>
            <div className="max-w-md rounded-3xl overflow-hidden shadow-xl mb-6 transform hover:scale-105 transition-all duration-300 bg-white hover:shadow-2xl" key={book._id}>
            <div className="relative overflow-hidden rounded-t-3xl">
                <img
                    className="w-full h-64 object-cover transform hover:scale-110 transition-all duration-500"
                    src={book.imageUrl ? book.imageUrl : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"}
                    alt="book image"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 m-3 rounded-full text-sm font-semibold">
                    NPR {book.bookPrice}
                </div>
            </div>
            <div className="p-8 space-y-4">
                <h2 className="font-bold text-2xl mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {book.bookName}
                </h2>
                <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                        <span className="font-semibold mr-2">ISBN:</span> {book.isbnNumber}
                    </p>
                    <p className="flex items-center">
                        <span className="font-semibold mr-2">Author:</span> {book.authorName}
                    </p>
                    <p className="flex items-center">
                        <span className="font-semibold mr-2">Published:</span> {book.publishedAt}
                    </p>
                </div>
                <div className="pt-6">
                    <p 
                        className='inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
                        
                    >
                        View Details
                    </p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BookCard

// 31:15