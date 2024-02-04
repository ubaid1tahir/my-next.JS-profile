import Contact from "./contact";

export function postData(data) {
    const url = 'http://localhost:3000/api/contact';

    try {
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = response.text();
        console.log('Response from server:', responseData);
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

function Page(){
    return (
        <Contact />
    )
}

export default Page;