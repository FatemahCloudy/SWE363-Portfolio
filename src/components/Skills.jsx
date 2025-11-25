import React from "react";

export default function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git & GitHub",
        "Python",
        "SQL",
        "APIs",
    ];

    return (
        <section
            id="skills"
            style={{
                padding: "4rem 1.5rem",
                background: "#795dae",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                }}
            >
                Skills
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "1rem",
                    maxWidth: "700px",
                    margin: "0 auto",
                }}
            >
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        style={{
                            background: "rgba(255,255,255,0.15)",
                            padding: "1rem 1.2rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            fontSize: "1.1rem",
                            backdropFilter: "blur(4px)",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
