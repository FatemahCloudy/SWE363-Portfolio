import React from "react";

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                padding: "4rem 1.5rem",
                background: "#f9f9f9",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    width: "100%",
                    maxWidth: "500px",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        marginBottom: "1.5rem",
                        color: "#795dae",
                    }}
                >
                    Contact Me
                </h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message sent! (but not really yet 😭)");
                    }}
                >
                    <label style={{ display: "block", marginBottom: "1rem" }}>
            <span style={{ display: "block", marginBottom: ".5rem" }}>
              Name
            </span>
                        <input
                            type="text"
                            required
                            style={{
                                width: "100%",
                                padding: ".8rem",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </label>

                    <label style={{ display: "block", marginBottom: "1rem" }}>
            <span style={{ display: "block", marginBottom: ".5rem" }}>
              Email
            </span>
                        <input
                            type="email"
                            required
                            style={{
                                width: "100%",
                                padding: ".8rem",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </label>

                    <label style={{ display: "block", marginBottom: "1rem" }}>
            <span style={{ display: "block", marginBottom: ".5rem" }}>
              Message
            </span>
                        <textarea
                            rows="5"
                            required
                            style={{
                                width: "100%",
                                padding: ".8rem",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                resize: "vertical",
                            }}
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "1rem",
                            background: "#795dae",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "1.1rem",
                            cursor: "pointer",
                            marginTop: ".5rem",
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
