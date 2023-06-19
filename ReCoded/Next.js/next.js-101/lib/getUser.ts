export default async function getUser(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) return undefined
    const user = await response.json();
    return user;
}
