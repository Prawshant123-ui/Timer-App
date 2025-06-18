import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null); // useRef to hold the interval ID

    const startTimer = () => {
        if (intervalRef.current !== null) return; // prevent multiple intervals
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const resetTimer = () => {
        stopTimer();
        setSeconds(0);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current); // cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-blue-600 mb-8">⏱️{seconds}s</h1>
            <div className="space-x-4">
                <button 
                    onClick={startTimer} 
                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                >
                    Start
                </button>
                <button 
                    onClick={stopTimer} 
                    className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                >
                    Stop
                </button>
                <button 
                    onClick={resetTimer} 
                    className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
