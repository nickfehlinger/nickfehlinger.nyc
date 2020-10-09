import React from "react"
import layoutStyles from "./layout.module.css"
import Heading from "./heading";
import SideNav from "./sidenav";




export default function Layout({children}){

    return (
        <div>
            <Heading></Heading>
            <div className={layoutStyles.container}>
                <SideNav></SideNav>
                <div className={layoutStyles.children}>
                { children }
                </div>
            </div>
        </div>
    )
}