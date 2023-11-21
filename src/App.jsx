import './App.css'
import React from "react";
import Header from "./components/Header";
import Content from './components/Content';
import Footer from './components/Footer';

export default props => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}