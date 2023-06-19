import React from 'react'
import getUserPosts from '@/lib/getUserPosts'
import getUser from '@/lib/getUser'
import { Suspense } from 'react'
import UserPosts from './Components/UserPosts'
import { Metadata } from 'next'
type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user = await userData
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}
export default async function page({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)
    const user = await userData

    return (
        <>
            <h2>
                {user.name}
            </h2>
            <br />
            <Suspense fallback={<h2>Laoading...</h2>}>
                <UserPosts postsPromise={userPostsData} />
            </Suspense>
        </>
    )
}
