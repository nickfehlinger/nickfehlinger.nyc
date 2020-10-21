import "./src/styles/global.css"


  export const onRouteUpdate = ({ location, prevLocation }) => {
	let sideNavDisplay = window.innerWidth < 480 ? "none" : "block";
    document.getElementById("sideNav").style.display = `${sideNavDisplay}`
  }