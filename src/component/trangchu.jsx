import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Test from './test.jsx'
import Header from './header.jsx'
import Nav from './nav.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <Header />
      <Nav></Nav>

  </StrictMode>,
)
