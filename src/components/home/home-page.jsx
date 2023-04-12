import Link from "next/link";

export const HomePage = ({data}) => (
    <main>
        <h2 className="title">Events Finder App</h2>
        <p className="description">Welcome to Events Finder App! Discover exciting events in Barcelona, San Francisco, and London. Click, explore, and register for personalized updates on the hottest happenings in your city.</p>
        <p className="highlight">Scroll down and enjoy!</p>
    <div className="all-events">
        {
        data.map(ev => {
            return (    
                <Link className="home-events-container" key={ev.id} href={`events/${ev.id}`} passHref> 
                    <h2>{ev.title}</h2>
                    <img className="image" alt={ev.title} src={ev.image} width={300} height={300}></img>
                    <p className="text-container">{ev.description}</p>
                </Link>
            )
        })
        }
    </div>
    </main>
)
