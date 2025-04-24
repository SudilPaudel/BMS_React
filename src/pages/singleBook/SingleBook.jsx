import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../components/Footer'

const SingleBook = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [book, setBook] = useState([])
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    console.log(response)
    if (response.status === 200) {
      setBook(response.data.data)
    }
  }
  useEffect(() => {
    fetchBook()
  }, [])

  const handleDelete = async () => {
    const response = await axios.delete(`https://bms-node.onrender.com/book/${id}`)
    if (response.status === 200) {
      alert("Book Deleted Successfully")
      navigate('/')
    }
  }
  return (
    <>
      <NavBar />
      <div className="h-[calc(100vh-200px)] bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap -mx-4 items-center">
            {/* Product Images with hover effect and animation */}
            <div className="w-full md:w-1/2 px-4 mb-8 transform transition duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={book.imageUrl ? book.imageUrl : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"}
                  alt="book_img"
                  className="w-full h-[500px] object-cover transform transition duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Product Details with fade-in animation */}
            <div className="w-full md:w-1/2 px-8 animate-[fadeIn_1s_ease-in]">
              <h2 className="text-4xl font-bold mb-4 text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                {book.bookName}
              </h2>
              <p className="text-gray-600 mb-6 text-lg italic">
                Published: {book.publishedAt}
              </p>
              <div className="mb-6 bg-indigo-50 p-4 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-indigo-600">
                  NPR {book.bookPrice}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="font-semibold text-gray-700 w-32">ISBN:</span>
                  <span className="text-gray-600">{book.isbnNumber}</span>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="font-semibold text-gray-700 w-32">Author:</span>
                  <span className="text-gray-600">{book.authorName}</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Link to={`/editBook/${book._id}`} className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md">
                  Edit Book
                </Link>
                <button onClick={handleDelete} className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md">
                  Delete Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleBook