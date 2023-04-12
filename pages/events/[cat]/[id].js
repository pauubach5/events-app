import SingleEvent from '@/src/components/events/singleEvent';

const EventPage = ({ data }) => <SingleEvent data={data} />
        
export default EventPage;

export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        };
    })

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { allEvents } = await import('data/data.json');
    const id = context.params.id;
    const eventData = allEvents.find((ev) => id === ev.id)

    return {
        props: {data: eventData},
    };
}