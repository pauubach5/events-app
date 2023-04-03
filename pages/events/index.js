import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({data}) => {
 
    return (
        <div className="events_container">
            <h1>Events</h1>
            <div className='events_page'>
                {
                data.map((event) => (
                    <Link className="card" key={event.id} href={`/events/${event.id}`} passHref>
                        <Image src={event.image} alt={event.title} width={300} height={300}></Image>
                        <h2>{event.title}</h2>
                    </Link>
                    ))
                };

            </div>
        </div>
    )
}
export default EventsPage;

//To pass static data (Static Generation), we pregenerate this pages before we deploy it. 
export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')  
  console.log(events_categories)
  return {
        props: {
          data: events_categories,
        }
    }
}