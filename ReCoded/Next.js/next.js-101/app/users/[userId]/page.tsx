import React from 'react'
import getUserPosts from '@/lib/getUserPosts'
import getUser from '@/lib/getUser'
import { Suspense } from 'react'
import UserPosts from './Components/UserPosts'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import { notFound } from 'next/navigation'
type Params = {
    params: {
        userId: string
    }
}



export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user = await userData
    if (!user?.name) return {
        title: 'User not found',
    }
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}
export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)
    const user = await userData
    if (!user?.name) notFound()
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
export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users: User[] = await usersData;
    return users.map((user: User) => (
        { userId: user.id.toString() }
    ))
}