import React from 'react'
import Link from 'next/link'

const CatEvent = ({data, pageName}) => {
  return (
    <div className='cat_events'>
        <h1 className='events_title'>Events in {pageName}</h1>    
            <div className='content'>
                {data.map(ev => (
                    <Link className="card" passHref href={`/events/${ev.city}/${ev.id}`} key={ev.id}>
                        <img alt={ev.title} src={ev.image} width={300} height={300}></img>
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                ))}
        </div>    
    </div>
  )
}

export default CatEvent

