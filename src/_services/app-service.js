
import React, { useState } from "react";
 let AuthContext = React.createContext()



export function AuthContextProvider(props){
    let [item,updateItem] = useState(0);
    let onUpdateItemHandler = (data)=>{
        updateItem(data)
    }
    return(
        <>
            <AuthContext.Provider value={{item:item,onUpdateItem:onUpdateItemHandler}}>{props.children}</AuthContext.Provider>
        </>
    )
}

export default  AuthContext;