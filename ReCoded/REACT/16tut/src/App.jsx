import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import { format, set } from 'date-fns'
import api from './api/post'
import useWindowSize from './hooks/useWindowSize';
function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await api.get('/posts')
        setPosts(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  async function handleDelete(id) {
    try {
      await api.delete(`/posts/${id}`)
      const postsAfterDelete = posts.filter(post => post.id !== id)
      setPosts(postsAfterDelete)
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const newPosts = [...posts, newPost]
    try {
      const response = await api.post('/posts', newPost)
      console.log(response);
      setPosts(newPosts)
      setPostTitle('')
      setPostBody('')
      navigate('post/' + id)
    } catch (error) {
      console.log(error.message);
    }

  }
  return (

    <Routes>
      <Route path="/" element={<Layout search={search} setSearch={setSearch} width={width} />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path='post'>
          <Route index element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />} />
          <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App
