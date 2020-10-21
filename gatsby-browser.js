import "./src/styles/global.css"

export const onClientEntry = () => {
	window.onload = () => { 
      let sideNavDisplay = window.innerWidth < 480 ? "none" : "block";
      document.getElementById("sideNav").style.display = `${sideNavDisplay}`;
	}
  }

  export const onRouteUpdate = ({ location, prevLocation }) => {
	console.log('new pathname', location.pathname)
	console.log('old pathname', prevLocation ? prevLocation.pathname : null)
	let sideNavDisplay = window.innerWidth < 480 ? "none" : "block";
    document.getElementById("sideNav").style.display = `${sideNavDisplay}`
  }