import "./src/styles/global.css"

export const onClientEntry = () => {
	window.onload = () => { 
      let sideNavDisplay = window.innerWidth < 480 ? "none" : "block";
      document.getElementById("sideNav").style.display = `${sideNavDisplay}`;
	}
  }