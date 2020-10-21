import React from "react"
import containerStyles from "./container.module.css"
import Testimonial from './testimonial'
import { InlineWidget } from "react-calendly"

export default function Container(props){
    return <div className={containerStyles.container}>
            <h3>{props.pageName ? props.pageName : null}</h3>
            {props.heroImage ? (
                <div className={containerStyles.heroImg} style={{backgroundImage:`url(${props.heroImage})`}}><div className={containerStyles.hoverstate}></div></div>
            ) : null}
            <div dangerouslySetInnerHTML={{__html: props.pageDescription}}></div>
            {props.downloadable ? (
                <a href={props.downloadable[1]} target='_blank'>
                    <button>Download {props.downloadable[0]}</button>
                </a>
            ) : null}
            {props.slug === 'testimonials' ? (
                <Testimonial></Testimonial>
            ) : null}
            {props.slug === 'freelance' ? (
                <InlineWidget
                url= "https://calendly.com/nickfehlinger"
                backgroundColor="ffffff"
                textColor="333333"
                ></InlineWidget>
            ) : null}
           </div>
}