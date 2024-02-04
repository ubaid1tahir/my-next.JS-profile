import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Resume from '@/app/resume/page'
import Projects from '@/app/projects/page'
import Contact from '@/app/contact/Page'


async function connectDB() {
    const data = await fetch('http://localhost:3000/api/contact');
    return data.text();
}



export const Home = () => {
    return (
        <>
            <main className="flex-shrink-0">
                <Header />
                <About />
                <Resume />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

