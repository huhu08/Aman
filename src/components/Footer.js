import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    
    <section>
      <h2>Aman Sudan </h2>
      <dl className="alt">
      <dt> Office Address</dt>
        <dd>8/11, Street No. 53, Alamarat.</dd>
        <dt>Phone</dt>
        <dd>+249 (9) 12303051</dd>
        <dt>P. O. Box</dt>
        <dd>8047, Khartoum</dd>
      </dl>
    </section>
    
    <section>
      <h2>Aman UAE</h2>
      <dl className="alt">
        <dt> Office Address</dt>
        <dd>Al Salam Street, Abu Dhabi</dd>
        <dt>Phone</dt>
        <dd>+971 (50) 4455093</dd>
        <dt>P. O. Box</dt>
        <dd>7324, UAE</dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        
       
      </ul>
    </section>
   
  </footer>
)

export default Footer
