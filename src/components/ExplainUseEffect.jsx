
import { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Rim");

    // CASE 1: No dependency array
    useEffect(() => {
        console.log("1. No dependency: Runs after every render");
    });

    // CASE 2: Empty dependency array
    useEffect(() => {
        console.log("2. Empty []: Runs on mount");
    }, []);

    // CASE 3: With a dependency
    useEffect(() => {
        console.log("3. [count]: Runs when count changes");
    }, [count]);

    return (
        <div>
            <h1>Understanding useEffect</h1>

            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            <h2>Name: {name}</h2>
            <button
                onClick={() =>
                    setName(name === "Rim" ? "Sara" : "Rim")
                }
            >
                Change Name
            </button>
        </div>
    );
}
