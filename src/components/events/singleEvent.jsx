import Image from "next/image"
import { useRouter } from "next/router"
import { useRef, useState} from "react"

export default function SingleEvent({ data }) {
    const inputEmail = useRef()
    const router = useRouter()
    const [message, setMessage] = useState()

    const onSubmit = async(e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address') 
        }
    
        try {
            const res = await fetch ('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailValue, eventId }),
            });

            //In case of the response is not ok: 
            if (!res.ok) throw new Error(`Error: ${res.status}`);
            const data = await res.json();
            setMessage(data.message)
            //To reset the input text.
            inputEmail.current.value = '';


        } catch (err) {
            console.log('ERROR', err)
        }
    }

    return (
        <div className='event_single_page'>
            <Image className='single-image' src={data.image} alt={data.title} width={1000} height={500} />
            <div className="event-content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <form className="email_registration" onSubmit={onSubmit}> 
                    <label>Get Registered for this event!</label>
                    <input type="email" ref={inputEmail} id="email" placeholder="Please insert your e-mail"/>
                    <button type="submit">Submit</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    )
}