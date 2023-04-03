import Link from "next/link";
import Image from "next/image";

export const HomePage = ({data}) => (
    <main>
    <p className="title">Events Finder</p>
    {
        data.map(ev => {
            return (
                <Link className="home-events-container" key={ev.id} href={`events/${ev.id}`} passHref> 
                    <div>
                        <h2>{ev.title}</h2>
                    </div>
                    <div className="content-title-image">
                        <Image alt={ev.title} src={ev.image} width={300} height={300}></Image>
                        <p className="text-container">{ev.description}</p>
                    </div>

            </Link>
        )
        })
    }
    </main>
)
