import React, { Fragment } from 'react';

import Title from '../Title';
import Header from '../Header';
import Footer from '../Footer';

import LanguageProvider from '../../contexts/LanguageProvider';
import AlertProvider from '../../contexts/AlertProvider';

function Layout(props) {
    return (
        <LanguageProvider>
            <Title />   {/* title e meta description do projeto */}
            <Header />  {/* Navbar de todo projeto*/}
            <AlertProvider>
                <Fragment>
                    {props.children}
                </Fragment>
            </AlertProvider>
            <Footer /> {/* Rodapé de todo projeto */}
        </LanguageProvider>
    );
};

export default Layout;