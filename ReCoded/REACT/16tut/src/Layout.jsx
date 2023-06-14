import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ search, setSearch, width }) {
    return (
        <div className='App'>
            <Header title={"React Js Blog"} width={width} />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}
