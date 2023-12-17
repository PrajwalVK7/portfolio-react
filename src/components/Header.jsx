import React from "react";
import "./Header.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
const Header = () => {
    // const [activeNav, setActiveNav] = useState("/");

    return (
        <Container>
            <nav>
                <Link className="link" to='/'>
                    {/* <a
                        href="/"
                        onClick={() => setActiveNav("/")}
                        className={activeNav === "/" ? "active" : ""}
                    > */}
                        <AiOutlineHome />

                    {/* </a> */}

                </Link>
                <Link className="link" to='/about'>

                    <AiOutlineUser />
                </Link>
                <Link className="link" to='/projects'>
                    {/* <a
                        href="/projects"
                        onClick={() => setActiveNav("/projects")}
                        className={activeNav === "/projects" ? "active" : ""}
                    > */}
                        <BiBook />
                    {/* </a> */}
                </Link>

                <Link className="link" to='/contact'>
                    {/* <a
                        href="/contact"
                        onClick={() => setActiveNav("/contact")}
                        className={activeNav === "/contact" ? "active" : ""}
                    > */}
                        <BiMessageSquareDetail />
                    {/* </a> */}
                </Link>
            </nav>
        </Container>
    );
};

export default Header;
