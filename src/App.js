import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from "./pages/Home"
import Accordion from './pages/Accordion'
import GenerateColors from './pages/GenerateColors'
import RatingStars from './pages/RatingStars'



export default function App() {

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='accordion' element={<Accordion />} />
            <Route path='Generate-colors' element={<GenerateColors />} />
            <Route path='rating-stars' element={<RatingStars numberOfStars={10} />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
