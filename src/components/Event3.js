import React, { useState } from "react";

export default function Event3() {
    const [key, setKey] = useState("");

    const handleKeyDown = (event) => {
        setKey(event.key);
    };

    const keyUp = (event) => {
        setKey(event.key)
    }

    return (
        <div className="App">
            <h1>on key down</h1>
            {key && <h2>Pressed Key: {key}</h2>}
            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Press here..."
            />

            {key ? <h2>Key UP : {key}</h2> : null}
            <input type='text'
                onKeyUp={keyUp}
                placeholder='Press & Release Key here...' />
        </div>
    );
}