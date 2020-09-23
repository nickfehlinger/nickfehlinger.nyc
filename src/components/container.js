import React from "react"
import containerStyles from "./container.module.css"

export default function Container(props){
    return <div className={containerStyles.container}>
            <h3>{props.pageName}</h3>
            <p dangerouslySetInnerHTML={{__html: props.pageDescription}}></p>
           </div>
}