
const AboutUsPage = () => {
    return (
        <div className="about_us">
            <h1>About Us</h1>
            <p>
                Introducing our innovative Events App, designed to enhance your event exploration experience in London, San Francisco, and Barcelona. Developed using NextJS, the app fetches event data from a local database and displays it in a user-friendly interface. Navigate between the events section and the about us section using the header, which, along with the footer, is present on all pages.
            </p>
            <p>
                Explore events in each city by selecting a location, or view all events in a stylishly designed page accessible from the header. For more information on an event, click on it to access a detailed description and an email input field for registration. Emails are securely saved in our local database, with an alert system in place for used or invalid email formats.


            </p>
                <h2>Skills Learned</h2> 

            <p>
                Our Events App showcases an extensive range of acquired skills and knowledge, including mastery of NextJS and its powerful features. During development, we leveraged dynamic imports, server-side rendering, and static site generation to optimize performance and ensure a smooth user experience. Additionally, we gained expertise in utilizing NextJS's built-in API routes to create serverless functions, enabling seamless communication between the front-end and back-end components.

Furthermore, we delved into back-end work, designing and implementing APIs to establish a reliable connection between the front-end and the local database. This integration facilitated the smooth retrieval, storage, and manipulation of event data, ensuring that users have access to the most up-to-date information.

This project allowed us to expand our technical skill set, enhancing our proficiency in NextJS, API development, back-end architecture, and front-end/database integration, while also refining our abilities in user interface design and error handling.
            </p>
        </div>
    )
    
}

export default AboutUsPage;