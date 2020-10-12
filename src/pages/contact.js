import React from "react"
import Layout from "../components/layout"

export default function Contact (){
	return (
		<Layout>
			<div className="contactTitle">
				<h3>Contact</h3>
				<p>Feel free to drop me a line! I can't wait to hear from you!</p>
			</div>
			<div className="contact">
				<form name="contact" method="POST" data-netlify="true" action="/thankyou">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<label for="Name">Name: </label><input type="text" name="Name" required />
					</p>
					<p>
						<label for="Email">Email: </label><input type="Email" name="Email" required/>
					</p>
					<p>
						<label for="Subject">Subject: </label><input type="text" name="Subject" required/>
					</p>
					<p>
						<label for="Message">Message: </label><textarea name="Message" required></textarea>
					</p>
					<p className="submit"><button type="submit">Send</button></p>
				</form>
			</div>
		</Layout>
	)
}