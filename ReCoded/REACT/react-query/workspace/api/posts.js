import axios from 'axios';


export function getPosts() {
    return axios.get('http://localhost:3000/posts').then(res => res.data)
}

export function getPost(id) {
    return axios.get(`http://localhost:3000/posts/${id}`).then(res => res.data)
}

export function createPost({ title, body }) {
    return axios
        .post("http://localhost:3000/posts", {
            title,
            body,
            userId: 1,
            id: Date.now(),
        })
        .then(res => res.data)
}