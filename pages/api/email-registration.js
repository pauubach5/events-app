import path from 'path';

//To read and overwrite the data of a file:
import fs from 'fs';

function buildPath() {
    //Access our data to reach our file: process.cwd ==> Current Working Directory
    return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
    //We need to extract allEvents data, operate over all the items and search for the emails_registered section.
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res) {
    const { method } = req;
    
    //Save the buildPath
    const filePath = buildPath();
    const {events_categories, allEvents} = extractData(filePath)

    if (!allEvents) {
        return res.status(404).json({
            status: 404,
            message: 'Events data not found'
        })
    }

    if (method === 'POST') {
        const { email, eventId } = req.body;

        if (!email | !email.includes('@')) {
            res.status(422).json({message: 'Invalid email'})
        }
        
        const newAllEvents = allEvents.map(ev => {
            if (ev.id === eventId) {
                if (ev.emails_registered.includes(email)) {
                    res.status(409).json({ message: 'This email has already been registered' })
                    return ev
                }
                return {
                    ...ev, emails_registered: [...ev.emails_registered, email]
                }
            }
            return ev;
        });
        //To overwrite the file with the new info.
        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))
    
        res.status(200).json({ message: `You has been registered successfully with the email: ${email} on ${eventId}` })
    }
}