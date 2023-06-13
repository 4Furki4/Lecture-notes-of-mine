import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ search, setSearch }) {
    return (
        <div className='App'>
            <Header title={"React Js Blog"} />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}
