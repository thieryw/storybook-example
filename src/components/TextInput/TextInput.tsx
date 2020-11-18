import React from "react";
import "./TextInput.css";


export const TextInput: React.FunctionComponent<{
    variant: "small" | "medium" | "large";
}> = props =>{

    return(
        <input className={props.variant} type="text" placeholder={props.variant}/>
    )

}