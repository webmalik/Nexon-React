import React from 'react';
import { Outlet } from 'react-router-dom';

import { useStateContext } from '../../StateContext';

import Header from '../header/Header';
import Menu from '../menu/Menu';
import ScrollToAnchor from '../scrollToAnchor/ScrollToAnchor';
import Sketch from '../sketch/Sketch';
import Footer from '../footer/Footer';

const SiteLayout = () => {
    const { isOpen, toggleMenu } = useStateContext();

    return (
        <div className="site germany" onClick={isOpen ? toggleMenu : undefined}>
            <div className="menu">
                <Menu />
            </div>

            <div id="wrapper" className={`wrapper grid__bg ${isOpen ? 'active' : ''}`}>
                <Sketch />
                <ScrollToAnchor />
                <Header />

                <main className="page">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default SiteLayout;
