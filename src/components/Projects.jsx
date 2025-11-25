import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal website built with React and Vite.",
        },
        {
            title: "Todo App",
            description: "A simple but beautiful task manager built in React.",
        },
        {
            title: "API Dashboard",
            description: "A dashboard that displays data from a public API.",
        },
    ];

    return (
        <section
            id="projects"
            style={{
                padding: "4rem 1.5rem",
                background: "#f9f9f9",
                minHeight: "100vh",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                    color: "#795dae",
                }}
            >
                My Projects
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.5rem",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                {projects.map((p, i) => (
                    <div
                        key={i}
                        style={{
                            background: "white",
                            padding: "1.5rem",
                            borderRadius: "12px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                            {p.title}
                        </h3>
                        <p style={{ fontSize: "1rem", color: "#555" }}>{p.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
