import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image' 

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/*<div style={{ maxWidth: `100vw`, marginBottom: `1.45rem`, border: `1px solid red` }}>*/}

      <BackgroundImage
      className="masthead"
      fluid={data.VancouverGatsby.childImageSharp.fluid} 
       > 
       <div className="black-overlay">
         <div className="content-box">
         <h1>Welcome to Crezo</h1>
         <h4>The future is built on a solid foundation</h4>
         </div>
       </div>

      </BackgroundImage>


      <Img fluid={data.VancouverGatsby.childImageSharp.fluid}
      alt="vancover buildings"
      />
      
    {/*</div>*/}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage


export const query = graphql`
query {
VancouverGatsby: file(relativePath: {eq: "Vancouver.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  FacilityGatsby: file(relativePath: {eq: "facility.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }


}
`