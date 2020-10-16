import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'
import logo from '../images/crezo-logo.png'
import facility from '../images/facility.jpg'

const Header = ({ siteTitle }) => {

//  const data = useStaticQuery(graphql`
//  query{
//   file(relativePath: {eq: "crezo-logo.png"}) {
//     childImageSharp {
//       fixed(width: 200) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }   
// }
// `)

  return (

  <header
    style={{
      display:`flex`,
      justifyContent:`center`,
      alignItems:`center`,
      backgroundColor: `rgba(0,0,0,.5)`,
      opacity:`0.2`,
      height: `10vh`,
    }}
  >
<div className="logo">
  <Link to="/">

  <img src={logo}/>
 {/*
    <Img fixed={data.file.childImageSharp.fixed}
      alt="crezo logo pic" />
      */}
      </Link>
</div>      
<div className="headermenu">
<div className="on-wide">this will be the wide version</div>
<div className="on-narrow">burg</div>
</div>      
        
         
        
      
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

}

export default Header


