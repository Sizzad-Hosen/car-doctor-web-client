import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes';
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='bg-white text-gray-900'>
<div className='max-w-7xl   mx-auto'>
<React.StrictMode>
  <AuthProvider>
     <RouterProvider router={router} />

  </AuthProvider>
  </React.StrictMode>,
</div>
</div>
)
