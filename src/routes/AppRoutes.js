import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar'
import Dummypage from '../pages/Dummypage';


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='Dummypage' element={<Dummypage></Dummypage>}> </Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;