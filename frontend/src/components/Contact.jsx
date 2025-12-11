import React, { useState } from "react";
import "../styles/style.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

            const response = await fetch(`${backendUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                alert('Message sent! Thank you for reaching out.');
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert(result.error || 'Please check your information and try again.');
            }
        } catch {
            alert('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-root"
            style={{
                padding: "6rem 1.5rem",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="glass"
                style={{
                    color: "var(--dark-colour)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "500px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "2.5rem",
                        marginBottom: "0.5rem",
                        color: "var(--primary-colour)",
                    }}
                >
                    Contact Me
                </h2>

                <p style={{
                    textAlign: "center",
                    color: "var(--dark-colour)",
                    marginBottom: "2rem",
                    opacity: 0.8,
                }}>
                    Get in touch — I'll respond within 24 hours!
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            htmlFor="name"
                            style={{
                                display: "block",
                                marginBottom: ".5rem",
                                color: "var(--dark-colour)",
                                fontWeight: "500"
                            }}
                        >
                            Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            style={{
                                width: "100%",
                                padding: "1rem",
                                borderRadius: "10px",
                                border: "1px solid var(--primary-colour)",
                                background: "var(--card-colour)",
                                color: "var(--dark-colour)",
                                fontSize: "1rem",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                marginBottom: ".5rem",
                                color: "var(--dark-colour)",
                                fontWeight: "500"
                            }}
                        >
                            Email *
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            style={{
                                width: "100%",
                                padding: "1rem",
                                borderRadius: "10px",
                                border: "1px solid var(--primary-colour)",
                                background: "var(--card-colour)",
                                color: "var(--dark-colour)",
                                fontSize: "1rem",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <label
                            htmlFor="message"
                            style={{
                                display: "block",
                                marginBottom: ".5rem",
                                color: "var(--dark-colour)",
                                fontWeight: "500"
                            }}
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                            placeholder="Your message here..."
                            style={{
                                width: "100%",
                                padding: "1rem",
                                borderRadius: "10px",
                                border: "1px solid var(--primary-colour)",
                                background: "var(--card-colour)",
                                color: "var(--dark-colour)",
                                fontSize: "1rem",
                                resize: "vertical",
                                fontFamily: "inherit",
                            }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            width: "100%",
                            padding: "1rem",
                            background: isSubmitting
                                ? "var(--dark-colour)"
                                : "linear-gradient(90deg, var(--primary-colour), var(--secondary-colour))",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.transform = "scale(1.02)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.transform = "scale(1)";
                            }
                        }}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}