import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import BookCard from '../../components/BookCard'
import axios from 'axios'
import Footer from '../../components/Footer'

const Home = () => {
  const [books,setBooks] = useState({})
  const fetchBooks = async ()=>{
    const response =await axios.get('http://localhost:3000/book/')
    console.log(response)
    if(response.status === 200){
      setBooks(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBooks()
  },[])

  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Book Management System</h1>
          <p className="text-lg text-white">Discover, Manage, and Enjoy Your Favorite Books</p>
        </div>
      </div>
      <div className='text-center mt-10'>
        <h1 className='text-3xl font-bold relative inline-block px-8 py-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-400 hover:after:bg-blue-600 after:transition-all'>
          Our Books
        </h1>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mt-4'>
      
      {
        books.length > 0 && books.map((book)=>{
          return (
            <BookCard book={book} />
          )
        })
      }
    </div>
    <Footer />
    </div>
    
    
  )
}

export default Home