import CatEvent from '@/src/components/events/catEvent';
import Image from 'next/image';
import Link from 'next/link';
//Link is to do a SPA, no need to reloading every page
const EventsCatPage = ({ data, pageName}) => {
    return (
        <CatEvent data = {data} pageName = {pageName} />
    ) 
}

export default EventsCatPage;

//To have dynamics paths with routes and the respective pages
export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')  
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString(),
            }
        }
    });

    
    return {
        paths: allPaths,
        fallback: false
    }
        //The fallack --> tells nexts what we want to do
        //in the situations where the user put something else  
        //that doesnt match with the path that we specify.
}

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json')  
    const id = context?.params.cat;
    console.log(id)
    
    const data = allEvents.filter(ev => ev.city === id)
    return {
        props: { data, pageName: id }
    };   
}