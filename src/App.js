import React from 'react';
import { StateProvider, useStateContext } from './StateContext';

import './root/scss/style.scss';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Mail from './components/mail/Mail';
import Reviews from './components/reviews/Reviews';

function App() {
    return (
        <StateProvider>
            <AppContent />
        </StateProvider>
    );
}

function AppContent() {
    const { isOpen, toggleMenu } = useStateContext();

    return (
        <div className="site" onClick={isOpen ? toggleMenu : undefined}>
            <div className="menu">
                <Menu />
            </div>
            <div id="wrapper" className={`wrapper grid__bg ${isOpen ? 'active' : ''}`}>
                <Header />
                <Hero />
                <Info />
                <Projects />
                <Services />
                <Mail />
                <Reviews />
            </div>
        </div>
    );
}

export default App;
