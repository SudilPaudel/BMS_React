
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import SingleBook from './pages/singleBook/SingleBook'
import AddBook from './pages/addBook/AddBook'
import Edit from './pages/edit/Edit'
import NotFound from './pages/404 Page/NotFound'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<SingleBook />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path="/editBook/:id" element={<Edit />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
