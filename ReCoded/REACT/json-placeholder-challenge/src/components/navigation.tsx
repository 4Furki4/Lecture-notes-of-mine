import React from 'react'

export default function ({ setEndpoint }: { setEndpoint: (endpoint: string) => void }) {
    return (
        <nav className='flex text-center'>
            <button className='p-2 w-full bg-slate-700 border-2 border-solid border-red-500 cursor-pointer'
                onClick={() => setEndpoint('users')}
            >
                Users
            </button>
            <button className='p-2 w-full bg-slate-700 border-2 border-solid border-red-500 cursor-pointer'
                onClick={() => setEndpoint('posts')}
            >
                Posts
            </button>
            <button className='p-2 w-full bg-slate-700 border-2 border-solid border-red-500 cursor-pointer'
                onClick={() => setEndpoint('comments')}
            >
                Comments
            </button>
        </nav>
    )
}
