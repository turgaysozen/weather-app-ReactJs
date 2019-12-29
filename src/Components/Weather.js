import React from "react";
import "./form.css"

const Weather = props => {
    return (
        <div className="text-light">
          {props.city !== '' ? isEmpty(props) : ''}
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

function isEmpty(props) {
    return (
        <div>
            <div className="cards pt-4">
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

export default Weather;