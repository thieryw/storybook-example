import React from "react";
import {TextInput} from "./TextInput";


export default{
    title: "Input",
    component: TextInput
}



export const Small = ()=> <TextInput variant="small" />
export const Medium = ()=> <TextInput variant="medium" />
export const Large = ()=> <TextInput variant="large" />