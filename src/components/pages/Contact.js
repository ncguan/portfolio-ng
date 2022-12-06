import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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
            setErrorMessage('Name is required');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!message) {
            setErrorMessage('Message is required');
            return;
        }

        alert('Message sent');

        setName('');
        setEmail('');
        setMessage('');
    }

    function nameRequired(){
        setErrorMessage('Name is required');
    }
    function emailRequired(){
        setErrorMessage('Email is required');
    }
    function messageRequired(){
        setErrorMessage('Message is required');
    }

    return (
        <div className="text-center">
            <p>Contact Me</p>
            <form>
                <div className="form-group m-2">
                    <label>Name:</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        onMouseOut={!name ? nameRequired : ''}
                    />
                </div>
                <div className="form-group m-2">
                    <label>Email:</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="example@email.com"
                        className="form-control"
                        onMouseOut={!email ? emailRequired : ''}
                    />
                </div>
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
                        onMouseOut={!message ? messageRequired : ''}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;