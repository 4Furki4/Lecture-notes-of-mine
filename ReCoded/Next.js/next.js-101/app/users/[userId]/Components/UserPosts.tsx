import React from 'react'
type Props = {
    postsPromise: Promise<Post[]>
}
export default async function UserPosts({ postsPromise }: Props) {
    const posts = await postsPromise

    const content = posts.map((post: Post) => (

        <article key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.body}
            </p>
            <br />
        </article>
    ))

    return content
}
