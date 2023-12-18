import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useValue } from "../../ContextApi";


export default function Auth(){
    const {isClicked} =useValue();
    return(
        <div>
            {isClicked?<SignUp />:<SignIn />}

        </div>
    )
}