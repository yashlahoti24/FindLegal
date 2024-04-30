// import React from "react";
// import "../css/Footer.css";
// import { Link } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

// const Footer = () => {
//   return (
//     <Footer>
//       <div className="footer-conatainer">
//         <Row>
//           <Col>
//             <h5>About Us</h5>
//             <p>E-Marketplace for extending Legal services to the people.</p>
//           </Col>
//           <Col>
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/find-lawyer">Find Lawyers</Link>
//               </li>
//               <li>
//                 <Link to="/">Contact Us</Link>
//               </li>
//             </ul>
//           </Col>
//           <Col>
//             <h5>Contact Information</h5>
//             <ul className="list-unstyled">
//               <li>Address: Vishwakarma Institute of Technology</li>
//               <li>Email: xyz@vit.edu</li>
//               <li>Phone: +91-9405839583</li>
//             </ul>
//           </Col>
//         </Row>
//         <Row>
//           <div className="text-center">
//             <p className="text-muted">
//               &copy; 2024 FindLegal. All Rights Reserved.
//             </p>
//           </div>
//         </Row>
//       </div>
//     </Footer>
//   );
// };

// export default Footer;

import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>E-Marketplace for extending Legal services to the people.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Find Lawyers</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>Address: Vishwakarma Institute of Technology</li>
              <li>Email: xyz@vit.edu</li>
              <li>Phone: +91-9405839583</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="text-muted">&copy; 2024 FindLegal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
