import { useEffect, useState } from "react";

function Timeout({ setStop, questionNumber }) {
    const [time, setTime] = useState(20);

    useEffect(() => {
        if (time === 0) return setStop(true);
        const interval = setInterval(() => {
            setTime((prev) => (prev = prev - 1));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    // if question number changed, reset timer
    useEffect(() => {
        setTime(20);
    }, [questionNumber]);

    return time;
}

export default Timeout;
