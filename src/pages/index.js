import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"


export default function Home() {
  return <Layout>
            <Container pageDescription="<p>Welcome to my site. I am Nick Fehlinger and I am a front end software engineer. I am currently available for both freelance and full-time work, so please take a look around the site! You can take a look at <a href='/about'>my bio</a> to learn about my journey into technology, read <a href='/resume'>my resume</a>, and <a href='/testimonials'> see what others have to say</a> about my work!</p><p>If you'd like to see the source code for this site, which I built with <a href='https://reactjs.org/' target='_blank'>React</a>, <a href='https://www.gatsbyjs.com/' target='_blank'>Gatsby.js</a>, <a href='https://graphql.org/' target='_blank'>GraphQL</a>, and a headless CMS called <a href='https://kontent.ai/' target='_blank'>Kontent from Kontentico</a>, please take a look at the <a href='https://github.com/nickfehlinger/nickfehlinger.nyc' target='_blank'>Github repository</a> for this site.</p><p>After you've looked around, feel free to <a href='/contact'>drop me a line</a> or <a href='/freelance'>book a freelancing consultation</a>! Thank you so much for dropping by, and I can't wait to hear from you.</p>" heroImage="https://assets-us-01.kc-usercontent.com/64db5c2c-873d-002c-d203-dd85e4f87b50/b0645c0e-f417-4bc5-b43d-036c179c6e61/roofb%26w.jpg">
            </Container>
         </Layout>
}