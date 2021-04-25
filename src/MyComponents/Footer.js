import '../App.css'
import React from 'react'
import { Github, Instagram, Facebook } from "react-bootstrap-icons";
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 d-flex justify-content-around align-items-start">
            <div>
                <Link to='/' className="logo-text text-white text-decoration-none"><h2>Todos List</h2></Link>
                <p>Free and Open-Source Todo List Web-App</p>
                <p>&copy; All rights reserved</p>
            </div>
            <div className="d-flex flex-column links-div">
                <h5>Links</h5>
                <Link to="/about" className="text-decoration-none text-white hover-underline">About</Link>
                <a href="https://github.com/Ashish-The-Coder/todo-react" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white hover-underline my-3">Contribute</a>
            </div>
            <div>
                <h5 className="font-weight-bold">Follow me on</h5>
                <ul className="list-unstyled d-flex flex-column">
                    <li><a href="https://github.com/Ashish-The-Coder" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none"><Github/> GitHub</a></li>
                    <li className="my-2"><a href="https://www.instagram.com/ashish_the_coder/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none"><Instagram/> Instagram</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100021502541961" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none"><Facebook/> Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}
