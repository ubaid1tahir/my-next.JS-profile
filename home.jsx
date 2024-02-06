"use client";

import React, {useEffect} from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from '@/app/resume/page'
import Projects from '@/app/projects/page'
import Contact from '@/app/contact/page'

async function connectDB() {
    const data = await fetch('http://localhost:3000/api/contact');
    return data.text();
}


export default function Home() {
    useEffect(() => {
        (async() => {
            await connectDB();
        })()
    })
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

