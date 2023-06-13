import axios from 'axios';

const BASE_URL = "http://localhost:3000/"
export function getPosts() {
    return axios.get(`${BASE_URL}posts`).then(res => res.data)
}

export function getPost(id) {
    return axios.get(`${BASE_URL}posts/${id}`).then(res => res.data)
}

export function createPost({ title, body }) {
    return axios
        .post(`${BASE_URL}posts`, {
            title,
            body,
            userId: 1,
            id: Date.now(),
        })
        .then(res => res.data)
}

export function getPostPaginated(page) {
    return axios.get(`${BASE_URL}posts`, {
        params: {
            _page: page,
            _sort: "title",
            _limit: 2
        }
    }).then(res => {
        const hasNext = page * 2 <= parseInt(res.headers["x-total-count"])
        return {
            nextPage: hasNext ? page + 1 : null,
            prevPage: page > 1 ? page - 1 : null,
            posts: res.data
        }
    })
}