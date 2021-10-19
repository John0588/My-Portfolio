// Keyword => type rfc
import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
 return (
  <div className="">
   <div className="">
    <div className="">
     <div className="">
       <a href="https://www.facebook.com/John.Almirol05" >
        <i className="fab fa-facebook-f"></i>
       </a>
       <a href="https://www.instagram.com/john_almirol05/" >
        <i className="fab fa-instagram"></i>
       </a>
       <a href="https://www.linkedin.com/in/john-almirol-7ab4a9213/" >
        <i className="fab fa-linkedin-in"></i>
       </a>
       <a href="https://github.com/John0588" >
        <i className="fab fa-github"></i>
       </a>
     </div>
     <div className="profile-details-name">
      <span className="primary-text">
       {" "}
       Hello, I'M <span className="highlighted-text">JOHN</span>
      </span>
     </div>
     <div className="profile-details-role">
      <span>
       {" "}
       <h1>
        <Typical
         loop={Infinity}
         steps={[
          "Web Programmer Developer", 1000,
          "Mobile Programmer Developer", 1000,
          "iPhone Programmer Developer", 1000,
          "Android Programmer Developer", 1000,
          "Android Programmer Developer", 1000,
          "Window Phone Programmer Developer", 1000,
          " Database Programmer Developer", 1000,
          "Software Programmer Developer", 1000,
         ]}
        />
       </h1>
       <span className="profile-role-tagline">
         Hi, my name is John Almirol. I'm studied in triOs College as a Web Developer. I love to design, discover something new.
      </span>
      </span>
     </div>
     <div>
      <button>
       {" "}
       Hire Me {" "}
      </button>
      <a href="Resume-converted.pdf" download="Resume-converted.pdf">
      <button className="btn highlighted-btn">Download my Resume</button>
      </a>
     </div>
    </div>
   </div>
  </div>
 );
}
