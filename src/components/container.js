import React from "react"
import containerStyles from "./container.module.css"
import Testimonial from './testimonial'

export default function Container(props){
    return <div className={containerStyles.container}>
            <h3>{props.pageName}</h3>
            {props.heroImage ? (
                <div className={containerStyles.heroImg} style={{backgroundImage:`url(${props.heroImage})`}}></div>
            ) : null}
            {props.downloadable ? (
                <a href={props.downloadable[1]} target='_blank'>
                    <button>Download {props.downloadable[0]}</button>
                </a>
            ) : null}
            <p dangerouslySetInnerHTML={{__html: props.pageDescription}}></p>
            {props.slug === 'testimonials' ? (
                <Testimonial></Testimonial>
            ) : null}
           </div>
}