import React from "react"

function App(props) {
    return (
        <div className="container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
                <h5 className="py-4">
    <i className={`wi ${props.icon} display-1`}></i>
                </h5>
    <h1 className="py-2">{props.temp}&deg;</h1>
                {MinMax(props.tempMin, props.tempMax)}
    <h4 className="py-3">{props.desc}</h4>
            </div>
        </div>
    )
}

function MinMax(min, max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default App;