import React from "react"
import footerStyles from "./footer.module.css"

export default function Footer (){
	let d = new Date,
		year = d.getFullYear();
	return(
		<div className={footerStyles.footer}>
			<div className={footerStyles.footerHalf}>
				<ul className={footerStyles.socialLinks}>
					<li className={footerStyles.socialLink}><a href="https://github.com/nickfehlinger">LinkedIn</a></li>	
					<li className={footerStyles.socialLink}><a href="https://www.linkedin.com/in/nickfehlinger/">GitHub</a></li>			
				</ul>
			</div>
			<div className={footerStyles.footerHalf}>
				<p>© Nick Fehlinger {year}</p>
			</div>
		</div>
	)
}