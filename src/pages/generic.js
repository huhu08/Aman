import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import {Link} from "gatsby"


class Generic extends React.Component {
  render() {

    return (
      <Layout>
        
        <Helmet title="About Us" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            
            <h2>Vision</h2>

            <p>Enhancing financial inclusion and leadership in the integration of payment solutions and smart services.
</p>
            <h2>Mission</h2>
            <p>Developing integrated high-growth financial products and services with diversified the customers and geography.
</p>
<br/>
<p>
          As a leading company in AI (Artificial Intelligence) technopoles, and ICT smart services, Aman is committed to localizing its operations, increase its investments and enhance cooperation, contribution to the implementation of the e-government plans and its willingness to cooperate with its customers and partners to achieve the goal of transition to the digital economy and smart governance.
          </p>
          <h2><Link to="/">Go back to  homepage</Link></h2>

          </section>
          
           
        </div>
      </Layout>
    )
  }
}

export default Generic
