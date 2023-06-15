export default async function getAllUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Something went wrong")
    const users = await response.json();
    return users;
}