import React from "react"
import Flipbox from "./Flipbox"

export default ({children, index, className}) => {
    const flip = index % 2 === 0

    return (<div className={"grid lg:grid-cols-2 " + className}>
        <div className={flip ? "lg:order-last" : ""}>
            {children[0]}
        </div>
        <div>
            {children[1]}
        </div>
    </div>)
}