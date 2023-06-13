import React from 'react'
import Post from './Post'

export default function Feed({ posts }) {
    return (
        <>
            {
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            }
        </>
    )
}
