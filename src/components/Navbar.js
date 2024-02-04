"use client";


import React, { useState, useEffect} from 'react'
import Link from 'next/link'


function Navbar({
    name,
    ...props
}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isClick, setIsClick] = useState(true);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, [windowWidth]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <a className="navbar-brand" href="/"><span className="fw-bolder text-primary">{name}</span></a>
                    <button onClick={() => setIsClick(!isClick)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                    <div className={`${windowWidth <= 991 ? 'block' : 'hidden'} ${isClick ? 'collapse' : ''} md:collapse navbar-collapse`} id="navbarSupportedContent1" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link" href='/'>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" href='/projects'>Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={`${windowWidth <= 991 ? 'hidden' : ''} navbar-collapse`} id="navbarSupportedContent1" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link" href='/'>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" href='/projects'>Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
