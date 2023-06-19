import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
export default async function Users() {
    const usersData: Promise<User[]> = getAllUsers()
    const users: User[] = await usersData;
    console.log('hello')
    const content = (
        <section>
            <h2>
                <Link href="/">
                    Back To Home
                </Link>
            </h2>
            <br />
            <ul>
                {
                    users.map((user: User) => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )

    return (
        <section>
            <h2>
                <Link href="/">
                    Back To Home
                </Link>
            </h2>
            <ul>
                {
                    users.map((user: User) => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
