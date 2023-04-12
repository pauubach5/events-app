import Link from "next/link";

export const Header = () => {
    return (
        <header className="topNav">
                <p>Events App</p>
                <nav>
                    <ul>
                        <li>
                            <Link href='/' passHref>Home</Link>
                        </li>
                    </ul>  
                    <ul>
                        <li>
                            <Link href='/events' passHref>Events</Link>
                        </li>
                    </ul>  
                    <ul>
                        <li>
                            <Link href='/about-us' passHref>About Us</Link>
                        </li>
                    </ul>  
                </nav>
        </header>
    )
}