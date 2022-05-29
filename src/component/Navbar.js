import React from "react"
import webLogo from "../images/Fill 213.png"

export default function Navbar() {
    return (
        <nav>
            <img src={webLogo} className="nav-icon" />
            <h3 className="nav--logo_text">mytraveljournal</h3>
        </nav>
    )
}