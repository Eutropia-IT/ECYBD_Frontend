import Footer from '@/component/Footer';
import Header from '@/component/Header/Header';
import React from 'react';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;