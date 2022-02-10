import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import Login from './views/Login/Login';
import Register from './views/Register/Register';



class Router extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}/>

                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />

                        <Route element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;