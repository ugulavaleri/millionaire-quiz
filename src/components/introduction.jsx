import React, { useState } from "react";

export default function Introduction({ setUserName }) {
    const [user, setUser] = useState("");

    const handleUserSubmit = () => {
        setUserName(user);
    };

    return (
        <div className="introductionContainer">
            <input
                type="text"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter Surname.."
            />
            <button onClick={handleUserSubmit}>Enter Game</button>
        </div>
    );
}
