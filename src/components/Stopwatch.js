import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!running && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running, time]);

    const reset = () => {
        setTime(0);
        setRunning(false);
    };

    return (
        <div>
            <h2>Stopwatch</h2>
            <div>{time}s</div>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
