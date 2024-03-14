import React from 'react'
import './footer.css'

function Footer() {
  return (
   <>
   <div className="footer">
    
  <div className="line line1">
          <h5>What’s your language?</h5>
          <ul>
            <li>Code editor (General)</li>
            <li>Text editor</li>
            <li>Hex/Binary</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Unix shell scripts</li>
            <li>PL/SQL</li>
            <li>EDI</li>
            <li>C++</li>
            <li>PHP</li>
            <li>XML</li>
            <li>Markdown</li>
            <li>SAS</li>
            <li>Visual Basic (VB)</li>
          </ul>
  </div>
        <div className="line line2"><h5>What type of user are you?</h5>
          <ul>
            <li>Programmer / Developer</li>
            <li>Web Developer</li>
            <li>Database Manager
            </li>
            <li>System Administrator
            </li>
            <li>Technical Writer
            </li>
            <li>Editor / Publisher</li>
            <li>Medical / Pharmaceutica</li>

          </ul></div>
        <div className="line line3"> <h5>General</h5>
          <ul>
            <li>Contact</li>
            <li>License Agreement (EULA)</li>
            <li>End of Life Policy</li>
            <li>Libraries and Patents</li>
            <li>Information Policy</li>
            <li>Privacy Policy</li>
            <li>Uninstall Instructions</li>
            <li>Sitemap</li>
            <li>Legal
            </li>
            <li>Software Security</li>

          </ul></div>
  <div className="line line4">
          <div className="div">
            <h5>Subscribe to Newsletter</h5>
          </div>
          <div>
            <p >Get the latest news on new releases, event, and developments.</p>
          </div>
          <div><input type="email" name="" id="" placeholder='
Enter email address…
' /></div>
          <div><button >SUBSCRIBE</button></div>
        </div>
  </div>
  <div className="footer1">
        <div className="logo"><img src="https://www.ultraedit.com/wp-content/uploads/2023/01/UE-Logo-1.webp" alt="img loading" />
          <p>©2024 SSK GROUP OF COMPANY. All rights reserved</p></div>
        <div className="icon">
          <div><i className="fa-brands fa-github "></i></div>
          <div><i className="fa-brands fa-x-twitter "></i></div>
          <div><i className="fa-brands fa-meta "></i></div>
          <div><i className="fa-brands fa-instagram "></i></div>
          <div><i className="fa-solid fa-truck-fast "></i></div>
        </div>
  </div>
   
   </>
  )
}

export default Footer