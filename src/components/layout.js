import React from "react"
import layoutStyles from "./layout.module.css"
import Heading from "./heading";
import SideNav from "./sidenav";
import Footer from "./footer";

// Requiring function causes error during builds
// as the code tries to reference window
const module = require("module") // Error

// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const module = require("module")
}
const module = typeof window !== `undefined` ? require("module") : null

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