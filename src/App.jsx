import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
    return (
        <div>
            <Navbar />

            <Hero />

            <Projects />

            <section
                id="skills"
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#795dae",
                    color: "white",
                }}
            >
                <h2>Skills Section</h2>
            </section>

            <section
                id="contact"
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#f9f9f9",
                }}
            >
                <h2>Contact Section</h2>
            </section>
        </div>
    );
}
