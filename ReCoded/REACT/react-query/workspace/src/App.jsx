import { useState } from 'react'
import './App.css'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import PostsList1 from './PostsList1'
import PostsList2 from './PostsList2'
import { getPost } from '../api/posts'
import Post from './Post'
const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
]
function App() {
  // const client = useQueryClient()
  // const { isLoading, data, error, isError } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () => wait(1000).then(() => [...POSTS])
  //   // queryKey: ['posts'],
  //   // queryFn: ((queryKey)) => wait(1000).then(() => [...POSTS]) // we can use queryKey to get the query key values in the queryFn
  // })
  // const newPostMutation = useMutation({
  //   mutationFn: (title) => {
  //     const newPost = {
  //       id: crypto.randomUUID(),
  //       title: title
  //     }
  //     return wait(1000).then(() => POSTS.push(newPost))
  //   },
  //   onSuccess: () => {
  //     client.invalidateQueries(['posts']) // This will refetch the posts query
  //   }
  // })
  // if (isLoading) return <h1>Loading...</h1>

  // if (isError) return <h1>{error}</h1>
  // return (
  //   <>
  //     <h1>TanStack Queryyy</h1>
  //     <div>
  //       {data.map(post => <p key={post.id}>{post.title}</p>)}
  //     </div>
  //     <button disabled={newPostMutation.isLoading} onClick={() => newPostMutation.mutate("New Post")}>Add New Post</button>
  //   </>
  // )


  const [currentPage, setCurrentPage] = useState(<PostsList1 />)

  const client = useQueryClient()
  function onHoverPostOneLink() {
    client.prefetchQuery({
      queryKey: ['post', 1],
      queryFn: () => getPost(1)
    })
  }
  return (
    <>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>Posts List 1</button>

      <button onClick={() => setCurrentPage(<PostsList2 />)}>Posts List 2</button>
      <button
        onMouseEnter={onHoverPostOneLink}
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      {currentPage}
    </>
  )
}






function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App
