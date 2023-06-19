export default async function getUserPosts(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    if (!response.ok) throw new Error("Something went wrong")
    const posts = await response.json();
    return posts;
}