import React from "react";
import "./Button.css";


export const Button: React.FunctionComponent<{
    label: "primary" | "secondary" | "success" | "danger";
}> = props =>{

    return(
        <input className={`Button ${props.label}`} type="button" value={props.label}/>
    )
}