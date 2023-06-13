import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PostPage({ posts, handleDelete }) {

    const { id } = useParams()
    const post = posts.find(p => (p.id).toString() === id)
    return (
        <main className='PostPage'>
            <article className='post'>
                {post && (
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                )}
                {!post && (
                    <>
                        <h2>Post not found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit our homepage</Link>
                        </p>
                    </>
                )}
            </article>
        </main>
    )
}
