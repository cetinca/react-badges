import React from "react";

export default function Badge ({text, color}) {
    
    let className;
    if (color == "yellow") {
        className =  "badge yellow"
    } else if (color == "green") {
        className =  "badge green"
    } else if (color == "blue") {
        className =  "badge blue"
    } else if (color == "red") {
        className =  "badge red"
    }



    return (
        <div className={className}>
            {text}
        </div>

    )
}