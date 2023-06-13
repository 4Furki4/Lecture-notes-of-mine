import React, { useEffect } from 'react'

export default function NewPost({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) {
    return (
        <main className='NewPost'>
            <h2>New Post</h2>
            <form onSubmit={handleSubmit} className='newPostForm'>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id='postTitle'
                    type="text"
                    required
                    placeholder='Post Title'
                    onChange={(e) => setPostTitle(e.target.value)}
                    value={postTitle}
                />
                <label htmlFor="postBody">Body:</label>
                <textarea
                    id="postBody"
                    required
                    placeholder='Post Body'
                    onChange={(e) => setPostBody(e.target.value)}
                    value={postBody}
                />
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}
