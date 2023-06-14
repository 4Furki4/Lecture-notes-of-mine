import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
export default function Header({ title, width }) {
    return (
        <header className='Header'>
            <h1>{title}</h1>
            {
                width > 768 ? <FaLaptop /> : width > 576 ? <FaTabletAlt /> : <FaMobileAlt />
            }
        </header>
    )
}
