import React from 'react';
import FrontPage from './FrontPage';
import Header from './Header';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="HomePage">
        <Header/>
        <FrontPage/>
        <Footer/>
      </div>
    )
}

export default HomePage;