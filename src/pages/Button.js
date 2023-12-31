import React, { useState } from "react";

// Define a function component for the button
const Button = () => {
    const [text, setText] = useState("Continue");

    const handleClick = () => {
    setText("Loading...");
    setTimeout(() => {
        setText("Continue");
    }, 2000);
    };

    return (
    <button
    onClick={handleClick}
    style={{
        width: "491px",
        height: "61px",
        borderRadius: "10px",
        backgroundColor: "gray",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        }}
    >
        {text}
    </button>
    );
};

export default Button;