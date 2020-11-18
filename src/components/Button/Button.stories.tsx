import React from "react";
import {Button} from "./Button";



export default{
    title: "Button",
    component: Button,

}



export const Primary = () => <Button label="primary"/>;
export const Secondary = () => <Button label="secondary"/>;
export const Success = () => <Button label="success"/>;