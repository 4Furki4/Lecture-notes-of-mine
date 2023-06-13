import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Nav({ search, setSearch }) {
    return (
        <nav className='Nav'>
            <form className='searchForm'
                onSubmit={e => e.preventDefault()}
            >
                <label htmlFor="search">
                    Search Posts
                </label>
                <input
                    placeholder='Search Posts'
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="post">Post</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}
