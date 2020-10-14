import React from "react"
import testimonialStyles from "./testimonial.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = props => (
	<li className={testimonialStyles.testimonial}>
		<div dangerouslySetInnerHTML={{__html: props.testimonial}}></div>
		<div className={testimonialStyles.attribution}>
			<p className={testimonialStyles.attributionName}>- {props.attributionName}</p>
			<p className={testimonialStyles.attributionTitle}>{props.attributionTitle}</p>
		</div>
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
			  title {
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
				<Testimonials testimonial={testimonial.elements.testimonial.value} attributionName={testimonial.elements.attribution.value} attributionTitle={testimonial.elements.title.value}></Testimonials>
				)
			})}
		</ul>
	)
}