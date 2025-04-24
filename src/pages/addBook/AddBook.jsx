import React from 'react'
import NavBar from '../../components/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Footer from '../../components/Footer'

const AddBook = () => {
  const [bookName, setBookName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [bookPrice, setBookPrice] = useState('')
  const [isbnNumber, setIsbnNumber] = useState('')
  const [publishedAt, setPublishedAt] = useState('')
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response =await axios.post("http://localhost:3000/book",{
      bookName: bookName,
      bookPrice: bookPrice,
      isbnNumber: isbnNumber,
      authorName: authorName,
      publishedAt: publishedAt,
      image: image
    },{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if(response.status === 201){
      alert("Book Added Successfully") // replace with toast
      navigate('/')
    }
      

  }

  return (
    <>
      <NavBar />
      <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
        <div className="text-center mb-12 sm:mb-16">
          <Link href="/">
            <img
              src="https://thumb.silhouette-ac.com/t/98/98033ae05ce2c65620571c567d1ec20f_t.jpeg"
              alt="logo"
              className="w-30 h-30 inline-block rounded-full border-2" // Added rounded-full class
            />
          </Link>
          <h4 className="text-slate-600 text-base mt-6">Add Book Form</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor='bookName' className="text-slate-800 text-sm font-medium mb-2 block">
                Book Name
              </label>
              <input
                name="bookName"
                id='bookName'
                type="text"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Book name"
                onChange={(e) => setBookName(e.target.value)}

              />
            </div>
            <div>
              <label htmlFor='authorName' className="text-slate-800 text-sm font-medium mb-2 block">
                Author Name
              </label>
              <input
                name="authorName"
                id='authorName'
                type="text"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Author name"
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='bookPrice' className="text-slate-800 text-sm font-medium mb-2 block">
                Book Price
              </label>
              <input
                name="bookPrice"
                id='bookPrice'
                type="text"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter book price"
                onChange={(e) => setBookPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='isbnNumber' className="text-slate-800 text-sm font-medium mb-2 block">
                ISBN No.
              </label>
              <input
                name="isbnNumber"
                id='isbnNumber'
                type="number"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter ISBN number"
                onChange={(e) => setIsbnNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='publishedAt' className="text-slate-800 text-sm font-medium mb-2 block">
                Published At
              </label>
              <input
                name="publishedAt"
                id='publishedAt'
                type="date"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter published date"
                onChange={(e) => setPublishedAt(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='image' className="text-slate-800 text-sm font-medium mb-2 block">
                Image
              </label>
              <input
                name="image"
                id='image'
                type="file"
                className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                placeholder='Upload image'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="mt-12">
            <button
              type="submit"
              className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default AddBook