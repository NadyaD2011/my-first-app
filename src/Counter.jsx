import React, {useState}  from "react";
import './Counter.css';

function MyComponenet() {
    const [count, setCount] = useState(0);
    return (
        <div className="Counter">
            <div>
                <h2>Счётчик:</h2>
                <h1>{count}</h1>
                <button onClick={() => setCount(count+1)} className="plus">Плюс +</button>
                <button onClick={() => setCount(count-1)} className="minus">Минус -</button>
            </div>
        </div>
    );
}

export default MyComponenet;