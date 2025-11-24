import React from "react";

export default function Navbar() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav style={{ padding: "1rem", background: "#795dae", color: "white", display: "flex", gap: "1rem" }}>
            <button onClick={() => scrollTo("hero")}>Home</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
    );
}
