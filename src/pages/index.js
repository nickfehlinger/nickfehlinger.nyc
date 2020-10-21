import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"


export default function Home() {
  return <Layout>
            <Container pageDescription="<p>Welcome to my site. I am Nick Fehlinger and I am a front end software engineer. I am currently available for both freelance and full-time work, so please take a look around the site! You can take a look at <a href='/work'>my work</a> on display, read <a href='/resume'>my resume</a>, and <a href='/testimonials'> see what others have to say</a> about my work! After you've looked around, feel free to <a href='/contact'>drop me a line</a> or <a href='/freelance'>book a freelancing consultation</a>! Thank you so much for dropping by, and I can't wait to hear from you.</p>" heroImage="https://assets-us-01.kc-usercontent.com/64db5c2c-873d-002c-d203-dd85e4f87b50/b0645c0e-f417-4bc5-b43d-036c179c6e61/roofb%26w.jpg">
            </Container>
         </Layout>
}