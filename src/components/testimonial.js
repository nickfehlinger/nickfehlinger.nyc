import React from "react"
import testimonialStyles from "./testimonial.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = props => (
	<li className={testimonialStyles.testimonial}>
		<p dangerouslySetInnerHTML={{__html: props.testimonial}}></p>
		<p>- {props.attribution}</p>
	</li>
)

export default function Testimonial () {
  let data = useStaticQuery(
	  graphql`
		{
		allKontentItemTestimonial {
		  nodes {
			elements {
			  attribution {
				value
			  }
			  testimonial {
				value
			  }
			}
		  }
		}
	  }
	   
	  `
  )


	let testimonials = data.allKontentItemTestimonial.nodes

	return(
		<ul className={testimonialStyles.testimonialList}>
			{testimonials.map((testimonial) => {
				return (
				<Testimonials testimonial={testimonial.elements.testimonial.value} attribution={testimonial.elements.attribution.value}></Testimonials>
				)
			})}
		</ul>
	)
}