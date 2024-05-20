import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from "./pages/Home"
import Accordion from './pages/Accordion'
import GenerateColors from './pages/GenerateColors'
import RatingStars from './pages/RatingStars'
import ImageSlider from './pages/ImageSlider'
import LoadMoreProducts from './pages/LoadMoreProducts'
import NestedMenu from './pages/NestedMenu'
import { sideMenu, tabs } from './components/data'
import QRCodeGenerator from './pages/QRCodeGenerator'
import LightDarkMode from './pages/LightDarkMode'
import CustomScrollIndicator from './pages/CustomScrollIndicator'
import Tabs from './pages/Tabs'
import Modal from './pages/Modal'
import GithubProfileFinder from './pages/GithubProfileFinder'
import SearchSuggestions from './pages/SearchSuggestions'
import TicTacToe from './pages/TicTacToe'
import TestCustomHooks from './pages/TestCustomHooks'
// import Tailwind from './pages/Tailwind'



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
            <Route path='nested-menu' element={<NestedMenu menus={sideMenu} />} />
            <Route path='qr-code-generator' element={<QRCodeGenerator />} />
            <Route path='light-dark-mode' element={<LightDarkMode />} />
            <Route path='custom-scroll-indicator' element={<CustomScrollIndicator url="https://dummyjson.com/products?limit=100" />} />
            <Route path='tabs' element={<Tabs tabs={tabs} />} />
            <Route path='modal' element={<Modal />} />
            <Route path='github-profile-finder' element={<GithubProfileFinder />} />
            <Route path='search-suggestions' element={<SearchSuggestions />} />
            <Route path='tic-tac-toe' element={<TicTacToe />} />
            <Route path='test-custom-hooks' element={<TestCustomHooks />} />
            {/* <Route path='tailwind' element={<Tailwind />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
