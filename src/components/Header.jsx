import React from "react";
import "./Header.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [activeNav, setActiveNav] = useState("/");

    return (
        <nav>
            <Link to='/'>
                <a
                    href="/"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <AiOutlineHome />

                </a>

            </Link>
            <Link to='/about'>
                <a
                    href="/about"
                    onClick={() => setActiveNav("/about")}
                    className={activeNav === "/about" ? "active" : ""}
                >
                    <AiOutlineUser />
                </a>
            </Link>
            <Link to='/projects'>
                <a
                    href="/projects"
                    onClick={() => setActiveNav("/projects")}
                    className={activeNav === "/projects" ? "active" : ""}
                >
                    <BiBook />
                </a>
            </Link>

            <Link to='/contact'>
                <a
                    href="/contact"
                    onClick={() => setActiveNav("/contact")}
                    className={activeNav === "/contact" ? "active" : ""}
                >
                    <BiMessageSquareDetail />
                </a>
            </Link>
        </nav>
    );
};

export default Header;
