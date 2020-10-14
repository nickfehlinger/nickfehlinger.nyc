import "./src/styles/global.css"

export const onClientEntry = () => {
	window.onload = () => { 
		console.log("hello") 
		console.log("load")
      let sideNavDisplay = window.innerWidth < 480 ? "none" : "block";
      document.getElementById("sideNav").style.display = `${sideNavDisplay}`;
	}
  }