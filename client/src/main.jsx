import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import Toaster from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={Routes} />
        </div>
        <Toaster></Toaster>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
