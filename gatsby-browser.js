import "./src/styles/global.css"


  export const onRouteUpdate = () => {
	let sideNavDisplay = window.innerWidth < 960 ? "none" : "block";
    document.getElementById("sideNav").style.display = `${sideNavDisplay}`
  }