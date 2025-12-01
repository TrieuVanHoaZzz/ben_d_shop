import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Header from './header.jsx'
import Nav from './nav.jsx'
import Banner from './banner.jsx'
import Product_Card from './product_card.jsx'
import Product_Limit from './product_limit.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Nav></Nav>
    <Banner></Banner>
    <Product_Limit></Product_Limit>
    <Footer></Footer>

  </StrictMode>,
)
