import Image from "next/image";
import projectPic from "@/../public/Vibrant.png"

function projects() {
    return (
        <div>
            <main className="flex-shrink-0">
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="flex xs:flex-col lg:flex-row align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">VibrantEdge</h2>
                                            <p>VibrantEdge: A Next.js-powered showcase of a digital marketing agency. Leveraging Tailwind CSS and Bootstrap, we highlight our service offerings and past projects. Join us to harness the power of digital marketing and elevate your brand's online presence.</p>
                                        </div>
                                        <Image className="img-fluid" width={400} height={500} src={projectPic} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let&apos;s build something together</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="/contact">Contact me</a>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}

export default projects
