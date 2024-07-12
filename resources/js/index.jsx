import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/app';
import { MantineProvider } from '@mantine/core';
import "../sass/app.scss"
import '@mantine/core/styles.css';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from 'react-use-cart';
import { AuthProvider } from './context/authContext';
import axios from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <MantineProvider>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </MantineProvider>
    </AuthProvider>
)

