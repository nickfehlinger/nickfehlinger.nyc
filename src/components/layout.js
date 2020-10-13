import React from "react"
import layoutStyles from "./layout.module.css"
import Heading from "./heading";
import SideNav from "./sidenav";
import Footer from "./footer";

export default function Layout({children}){

    return (
        <div className={layoutStyles.border}>
            <div className={layoutStyles.content}>
                <Heading></Heading>
                <div className={layoutStyles.container}>
                    <SideNav></SideNav>
                    <div className={layoutStyles.children}>
                    { children }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}