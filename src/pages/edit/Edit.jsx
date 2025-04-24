import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../components/Footer'

const Edit = () => {
const [bookName, setBookName] = useState('')
const [authorName, setAuthorName] = useState('')
const [bookPrice, setBookPrice] = useState('')
const [isbnNumber, setIsbnNumber] = useState('')
const [publishedAt, setPublishedAt] = useState('')
const [image, setImage] = useState(null)
const navigate = useNavigate()
const { id } = useParams()

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("bookName", bookName);
  formData.append("authorName", authorName);
  formData.append("bookPrice", bookPrice);
  formData.append("isbnNumber", isbnNumber);
  formData.append("publishedAt", publishedAt);
  if (image instanceof File) {
    formData.append("image", image); // Only append if it's a File (not a URL from previous fetch)
  }

  try {
    const response = await axios.patch(`http://localhost:3000/book/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      alert("Book Edited Successfully");
      navigate("/book/" + id);
    }
  } catch (error) {
    console.error("Update error:", error);
    alert("Failed to update book.");
  }
};

const fetchBook = async()=>{
  const response =await axios.get(`http://localhost:3000/book/${id}`)
  if(response.status === 200){
    console.log(response.data.data)
    setBookName(response.data.data.bookName)
    setAuthorName(response.data.data.authorName)
    setBookPrice(response.data.data.bookPrice)
    setIsbnNumber(response.data.data.isbnNumber)
    setPublishedAt(response.data.data.publishedAt)
    setImage(response.data.data.imageUrl)
}
}
useEffect(()=>{
  fetchBook()
}
,[])

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
        <h4 className="text-slate-600 text-base mt-6">Edit Book Form</h4>
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
              value={bookName}
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
              value={authorName}
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
              value={bookPrice}
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
              value={isbnNumber}
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
              value={publishedAt}
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
            Edit Book
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </>
)
}


export default Edit