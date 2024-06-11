import React from "react";
import "./JakeClass.css";
import jake from "./jakeaskingquestions.png";

const JakeClass = () => {
    return (
        <div className="jake">
            <img src={jake} alt="Jake" className="jake jake" />
        </div>
    );
};

export default JakeClass;