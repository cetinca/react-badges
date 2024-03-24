import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card ({title, text}) {




    return (
        <div className="card">
            <div className="card--container">< IoCloudUploadOutline className="card--icon"/></div>
            <p className="card--title">{title}</p>
            <p className="card--text">{text}</p>
        </div>
    )
}