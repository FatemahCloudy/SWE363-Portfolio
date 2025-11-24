import React from "react";

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#cf7fdb",
                color: "white",
                textAlign: "center",
                padding: "0 1rem",
            }}
        >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                Hello! I’m Fatemah 🥰
            </h1>
            <p style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "2rem" }}>
                I build clean, modern, and simple web experiences. Welcome to my portfolio!
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
                <a
                    href="#projects"
                    style={{
                        padding: "0.75rem 1.5rem",
                        borderRadius: "8px",
                        background: "white",
                        color: "#795dae",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    style={{
                        padding: "0.75rem 1.5rem",
                        borderRadius: "8px",
                        border: "2px solid white",
                        color: "white",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}
