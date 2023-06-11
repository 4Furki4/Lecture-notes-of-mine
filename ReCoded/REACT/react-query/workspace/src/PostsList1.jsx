import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPosts } from '../api/posts'
export default function PostsList1() {
    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })

    if (postsQuery.isLoading) return <h1>Loading...</h1>
    if (postsQuery.isError) return <h1>{JSON.stringify(postsQuery.error)}</h1>
    return (
        <div>
            <h1>Posts List 1</h1>
            <ol>
                {postsQuery.data.map(post => <li key={post.id}>{post.title}</li>)}
            </ol>
        </div>

    )
}
