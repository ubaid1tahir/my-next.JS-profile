import Contact from "../../../components/Contact";

export async function usePostData(data) {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`;
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
        console.log(responseData);
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