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
				{/* <form name="contact" method="POST" data-netlify="true" action="/thankyou">
					<p>
						<label for="Name">Name: </label><input type="text" name="Name" />
					</p>
					<p>
						<label for="Email">Email: </label><input type="Email" name="Email" />
					</p>
					<p>
						<label for="Reason[]">Reason For Contact: </label><select name="Reason[]" multiple>
							<option value="Hire-FT">Hiring (Full Time)</option>
							<option value="Hire-Freelance">Hiring (Freelance)</option>
							<option value="General">General Inquiry</option>
							<option value="Other">Other</option>
						</select>
					</p>
					<p>
						<label for="Message">Message: </label><textarea name="Message"></textarea>
					</p>
					<p className="submit"><button type="submit">Send</button></p>
				</form> */}
				<form name="contact" method="POST" data-netlify="true">
					<p>
						<label>Your Name: <input type="text" name="name" /></label>   
					</p>
					<p>
						<label>Your Email: <input type="email" name="email" /></label>
					</p>
					<p>
						<label>Your Role: <select name="role[]" multiple>
						<option value="leader">Leader</option>
						<option value="follower">Follower</option>
						</select></label>
					</p>
					<p>
						<label>Message: <textarea name="message"></textarea></label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</Layout>
	)
}