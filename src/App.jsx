import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import DetailPage from './DetailPage'

function App() {


  return (
    <div className='my-4 '>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail' element={<DetailPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
