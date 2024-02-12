"use client";

import html2canvas from 'html2canvas';

import { useRef } from 'react';



function ResumeContent() {
    const targetRef = useRef(null);
    const captureScreenshot = () => {
        if (targetRef.current) {
            html2canvas(targetRef.current).then((canvas) => {
            // Convert canvas to image and download
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'screenshot.png';
            link.click();
            });
        }
    }
    return (
        <div>  
            <div className="container px-5 my-5" ref={targetRef}>
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        <section>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                                
                                <a className="btn btn-primary px-4 py-3" onClick={captureScreenshot} href="#!">
                                    <div className="d-inline-block bi bi-download">
                                    <span className='block md:hidden'>Download</span>
                                    <span className='hidden md:block'>Download Resume</span>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2023 - Present</div>
                                                <div className="small fw-bolder">Web Developer</div>
                                                <div className="small text-muted">KelperSoft</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Enter the dynamic world of Kelpersoft, where Ubaid, a seasoned professional, weaves magic in web-related projects. His diverse experience at the forefront of innovation makes every project an extraordinary journey.</div></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2021 - Present</div>
                                                <div className="small fw-bolder">Self Learner</div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Demonstrated competence in Full-stack development with the use of famous JS Libraries like React, Express and Next.JS to showcase ongoing dedication to expanding technical skills.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section>
                            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                            
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">2021 - 2025</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">UMT</div>
                                                    <div className="small text-muted">Lahore, Johar Town</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Master&apos;s</div>
                                                    <div className="small text-muted">Web Development</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Meet Muhammad Ubaid, a passionate BS CS student at UMT Institute, who thrives as a self-learner. With an insatiable curiosity, Ubaid has mastered the MERN stack, crafting innovative solutions that redefine possibilities.</div></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">2023</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">Certification By HackerRank</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">React</div>
                                                    <div className="small text-muted">Web Development</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Ubaid, a coding maestro who earned his HackerRank certificates in React and JS basics. With a mind wired for problem-solving, Ubaid brings a touch of brilliance to every project he undertakes.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <div className="pb-5"></div>
                        
                        <section>
                            
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Website SEO</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">FrontEnd Development</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Build APIs</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Next JS</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Database Management</div></div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C#</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeContent

