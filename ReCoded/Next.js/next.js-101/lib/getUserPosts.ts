export default async function getUserPosts(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {
        next: {
            revalidate: 60
        }
    });
    if (!response.ok) return undefined
    const posts = await response.json();
    return posts;
}