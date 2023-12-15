import React from "react";
import "./Header.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [activeNav, setActiveNav] = useState("/");

    return (
        <nav>
            <Link to='/'>
                <a
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <AiOutlineHome />

                </a>

            </Link>
            <Link to='/about'>
                <a 

                    onClick={() => setActiveNav("/about")}
                    className={activeNav === "/about" ? "active" : ""}
                >
                    <AiOutlineUser />
                </a>
            </Link>
            <Link to='/projects'>
                <a

                    onClick={() => setActiveNav("/projects")}
                    className={activeNav === "/projects" ? "active" : ""}
                >
                    <BiBook />
                </a>
            </Link>

            <Link to='/contact'>
                <a

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
