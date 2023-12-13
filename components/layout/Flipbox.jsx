import React from "react"

export default ({children, flip = false, className}) => {
    return (<div className={"grid lg:grid-cols-2 " + className}>
        <div className={flip ? "order-last lg:order-first": ""}>
            {children[0]}
        </div>
        <div>
            {children[1]}
        </div>
    </div>)
}