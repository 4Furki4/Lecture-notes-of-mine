import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getPostPaginated } from '../api/posts'

export default function PageListPaginated() {
    const [page, setPage] = useState(1)
    const { status, error, data, isPreviousData } = useQuery({
        queryKey: ['posts', { page }],
        queryFn: () => getPostPaginated(page),
        keepPreviousData: true
    })
    if (status === "loading") return <h1>Loading...</h1>
    if (status === "error") return <h1>{JSON.stringify(error)}</h1>
    return (
        <>
            <h1>Posts List Paginated
                <br />
                <small>{isPreviousData && "Previous Data"}</small>
            </h1>
            {data.posts.map(post => (<div key={post.id}>{post.title}</div>))}
            {data.prevPage && <button onClick={() => setPage(data.prevPage)}>Previous</button>}{" "}
            {data.nextPage && <button onClick={() => setPage(data.nextPage)}>Next</button>}
        </>
    )
}
