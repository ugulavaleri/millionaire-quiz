import React, { useEffect, useState } from "react";

function Timeout({ setStop, questionNumber }) {
    const [time, setTime] = useState(30);

    useEffect(() => {
        if (time === 0) return setStop(true);
        const interval = setInterval(() => {
            setTime((prev) => (prev = prev - 1));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // if question number changed, reset timer
    useEffect(() => {
        setTime(30);
    }, [questionNumber]);

    return time;
}

export default Timeout;
