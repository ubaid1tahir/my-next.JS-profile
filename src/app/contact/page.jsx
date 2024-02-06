import Contact from "../../../Contact";

export async function usePostData(data) {
    const url = '/api/contact';

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
    } catch (error) {
        console.error(error);
    }
}

function Page(){
    return (
        <Contact />
    )
}

export default Page;