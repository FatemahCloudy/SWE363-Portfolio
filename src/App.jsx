import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./styles/style.css"

export default function App() {
    return (
        <div>
            <Navbar />

            <section id="hero" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#cf7fdb", color: "white" }}>
                <h1>Hello! I am Stella 🥰</h1>
            </section>

            <section id="projects" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f9f9f9" }}>
                <h2>Projects Section</h2>
            </section>

            <section id="skills" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#795dae", color: "white" }}>
                <h2>Skills Section</h2>
            </section>

            <section id="contact" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f9f9f9" }}>
                <h2>Contact Section</h2>
            </section>
        </div>
    );
}
