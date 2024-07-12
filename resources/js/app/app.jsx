import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import AddPlat from './addPlat';

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addPlat' element={<AddPlat />} />
            </Routes>
        </BrowserRouter>
    );
}


