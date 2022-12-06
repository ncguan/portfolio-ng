import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitErrorMessage, setSubmitErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setSubmitErrorMessage('Name is required');
            return;
        }
        if (!validateEmail(email)) {
            setSubmitErrorMessage('Email is invalid');
            return;
        }
        if (!message) {
            setSubmitErrorMessage('Message is required');
            return;
        }

        alert('Message sent');

        setName('');
        setEmail('');
        setMessage('');
        setSubmitErrorMessage('');
    }

    function nameRequired() {
        setErrorMessage('Name is required');
    }
    function emailRequired() {
        setErrorMessage('Email is required');
    }
    function messageRequired() {
        setErrorMessage('Message is required');
    }
    function noRequiredmessage() {
        setErrorMessage('');
    }

    return (
        <div className="text-center mt-3">
            <h2>Contact Me</h2>
            <div className="row">
                <div className="col-2"></div>
                <form className="col-8">
                    <div className="form-group row m-1">
                        <label className="col-2">Name:</label>
                        <div className="col-10">
                            <input
                                value={name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                onMouseOut={!name ? nameRequired : noRequiredmessage}
                            />
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage === 'Name is required' ? errorMessage : ''}</p>
                        </div>
                    )}

                    <div className="form-group row m-2">
                        <label className="col-2">Email:</label>
                        <div className="col-10">
                            <input
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                placeholder="example@email.com"
                                className="form-control"
                                onMouseOut={!email ? emailRequired : noRequiredmessage}
                            />
                        </div>
                    </div>
                    {
                        errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage === 'Email is required' ? errorMessage : ''}</p>
                            </div>
                        )
                    }
                    <div className="form-group m-2">
                        <label>Message:</label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Write your message here"
                            className="form-control"
                            rows="5"
                            onMouseOut={!message ? messageRequired : noRequiredmessage}

                        />
                    </div>
                    {
                        errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage === 'Message is required' ? errorMessage : ''}</p>
                            </div>
                        )
                    }
                    <button type="button" className="btn" onClick={handleFormSubmit}>Submit</button>
                </form >
                {submitErrorMessage && (
                    <div>
                        <p className="error-text">{submitErrorMessage}</p>
                    </div>
                )
                }
            </div>
        </div >
    )
}

export default Contact;