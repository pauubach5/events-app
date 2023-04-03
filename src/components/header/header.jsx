import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <div className="topNav">
                <Image alt='webiste logo' src={'/images/logo1`.jpg'} width={50} height={50} />
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
            </div>
        </header>
    )
}