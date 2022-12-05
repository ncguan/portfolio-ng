import React from 'react';
import avatar from '../../images/avatar.png';

export default function About() {
    return (
        <div className="text-center mt-3">
            <h2>About Me</h2>
            <img src={avatar} alt="Avatar" className="img-thumbnail"></img>
            <p className="mt-2">
                Full Stack Web Developer with a Bachelor's Degree in Psychology.
                Currently earning a Certificate in Full Stack Web Development from the University of California, Berkeley Extension.
                Driven to learn more about new technologies and develop user-friendly applications.
            </p>
        </div>
    );
}