import React from "react";
import "./Center.css";

export const Center: React.FunctionComponent = props=>{
    return(
        <div className="Center">{props.children}</div>
    )
}