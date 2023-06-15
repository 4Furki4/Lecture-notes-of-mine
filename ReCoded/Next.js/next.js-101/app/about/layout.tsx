
export const metadata = {
    title: 'About',
    description: 'About page',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>
                About Navbar
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}