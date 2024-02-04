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
            <div class="container px-5 my-5" ref={targetRef}>
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Resume</span></h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <section>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h2 class="text-primary fw-bolder mb-0">Experience</h2>
                                
                                <a class="btn btn-primary px-4 py-3" onClick={captureScreenshot} href="#!">
                                    <div class="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                            </div>
                            
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2023 - Present</div>
                                                <div class="small fw-bolder">Web Developer</div>
                                                <div class="small text-muted">KelperSoft</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Enter the dynamic world of Kelpersoft, where Ubaid, a seasoned professional, weaves magic in web-related projects. His diverse experience at the forefront of innovation makes every project an extraordinary journey.</div></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2021 - Present</div>
                                                <div class="small fw-bolder">Self Learner</div>
                                                
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Demonstrated competence in Full-stack development with the use of famous JS Libraries like React, Express and Next.JS to showcase ongoing dedication to expanding technical skills.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section>
                            <h2 class="text-secondary fw-bolder mb-4">Education</h2>
                            
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2021 - 2025</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">UMT</div>
                                                    <div class="small text-muted">Lahore, Johar Town</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">Master's</div>
                                                    <div class="small text-muted">Web Development</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Meet Muhammad Ubaid, a passionate BS CS student at UMT Institute, who thrives as a self-learner. With an insatiable curiosity, Ubaid has mastered the MERN stack, crafting innovative solutions that redefine possibilities.</div></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2023</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">Certification By HackerRank</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">React</div>
                                                    <div class="small text-muted">Web Development</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Ubaid, a coding maestro who earned his HackerRank certificates in React and JS basics. With a mind wired for problem-solving, Ubaid brings a touch of brilliance to every project he undertakes.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <div class="pb-5"></div>
                        
                        <section>
                            
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Website SEO</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">FrontEnd Development</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Build APIs</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Next JS</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Database Management</div></div>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-0">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Languages</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">C#</div></div>
                                            <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
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

