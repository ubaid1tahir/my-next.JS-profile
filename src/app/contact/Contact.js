"use client";

import React, {useState} from 'react'
import { usePostData } from './page';

function Contact() {
    const [message, setMessage] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        content: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(message);

        usePostData(message);

        setMessage({
            fullName: '',
            email: '',
            phoneNumber: '',
            content: ''
        })
    }
    return (
        <div>
            <main className="flex-shrink-0">
            <section className="py-5">
                <div className="container px-5">
                    
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">Let&apos;s work together!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                
                                <form id="contactForm" onSubmit={handleSubmit} data-sb-form-api-token="API_TOKEN">
                                    
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" value={message.fullName} onChange={(e) => setMessage({...message, fullName: e.target.value})} placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email"  value={message.email} onChange={(e) => setMessage({...message, email: e.target.value})} placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone"  value={message.phoneNumber} onChange={(e) => setMessage({...message, phoneNumber: e.target.value})} type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text"  value={message.content} onChange={(e) => setMessage({...message, content: e.target.value})} placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    
                                    <div className="d-grid"><button className="btn btn-primary btn-lg hover:cursor-pointer" id="submitButton" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}

export default Contact
