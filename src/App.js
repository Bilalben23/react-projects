import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from "./pages/Home"
import Accordion from './pages/Accordion'
import GenerateColors from './pages/GenerateColors'
import RatingStars from './pages/RatingStars'
import ImageSlider from './pages/ImageSlider'
import LoadMoreProducts from './pages/LoadMoreProducts'



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
            <Route path='images-slider' element={<ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />} />
            <Route path='load-more-products' element={<LoadMoreProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
