
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Home/Footer/Footer';
import Header from '../../pages/Home/Header/Header';

const Main = () => {
    return (
       
            <Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </Header>
    );
};

export default Main;