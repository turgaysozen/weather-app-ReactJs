import React from "react";
import "./form.css"

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : (props.errNotFound ? errNotFound() : null)}</div>
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Country" name="country" autoComplete="off" />
                    </div>
                    <div className="col-md-3 mt-md-0 py-3 text-md-left">
                        <button className="btn btn-danger">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
            </div>
    )
}
function errNotFound() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            City Not Found            
            </div>
    )
}
export default Form;