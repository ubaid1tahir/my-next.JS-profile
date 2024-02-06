import Contact from "../../../Contact";

export async function usePostData(data) {
    const url = 'http://localhost:3000/api/contact';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();
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