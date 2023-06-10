import './App.css'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
]
function App() {
  const client = useQueryClient()
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS])
  })
  const newPostMutation = useMutation({
    mutationFn: (title) => {
      const newPost = {
        id: crypto.randomUUID(),
        title: title
      }
      return wait(1000).then(() => POSTS.push(newPost))
    },
    onSuccess: () => {
      client.invalidateQueries(['posts']) // This will refetch the posts query
    }
  })
  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>{error}</h1>
  return (
    <>
      <h1>TanStack Queryyy</h1>
      <div>
        {data.map(post => <p key={post.id}>{post.title}</p>)}
      </div>
      <button disabled={newPostMutation.isLoading} onClick={() => newPostMutation.mutate("New Post")}>Add New Post</button>
    </>
  )
}




function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App
