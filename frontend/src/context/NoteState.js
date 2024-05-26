import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>
    {
        const s1 = {
            "name":"prashu",
            "class":"3c"
        }
        const [state,setState] =  useState(s1);

        const update = () =>
            {
                setTimeout(() => {
                    setState({"name":"tarun",
                        "class":"Inter"
                    })
                }, 1000);
            }
        return(

        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
        );
    }

    export default NoteState;