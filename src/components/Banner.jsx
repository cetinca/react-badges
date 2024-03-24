import React from "react";
import { CgDanger } from "react-icons/cg";
import { FiCheckSquare } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";

export default function Banner ({title, text, color}) {
    
    let className;
    let Icon;
    if (color == "yellow") {
        className =  "banner yellow"
        Icon = CgDanger
    } else if (color == "green") {
        className =  "banner green"
        Icon = FiCheckSquare
    } else if (color == "blue") {
        className =  "banner blue"
        Icon = FiInfo
    } else if (color == "red") {
        className =  "banner red"
        Icon = FiXCircle
    }



    return (
        <div className={className}>
            <h4 className="banner--title">< Icon className="banner--icon"/>{title}</h4>
            <p>{text}</p>
        </div>
    )
}