// TermsAndConditions.jsx

import React from 'react';
import "../../assets/css/TermsAndConditions.css";
import Header from './Header';

const TermsAndConditions = () => {
  return (
    <div className='view'>
        <Header/>
    <div className="terms-and-conditions">
      <h2>Terms and Conditions</h2>
      <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
      <h3>1. The content of the pages of this website is for your general information and use only.</h3>
      <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.</p>
      <h3>2. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</h3>
      <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland, and Wales.</p>
    </div>
    </div>
  );
}

export default TermsAndConditions;
