import React from 'react';
import './Contact.css'; 
import resume from '../assets/Resume/SiddharthSinghResume.pdf'; 

const Contact = () => {
  // Function to copy phone number to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText('+91 7004535030');
    alert('Phone number copied to clipboard!');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-info">
        <div className="info-section">
          <h2 className="section-title">Siddharth Singh</h2>
          <p className="info-item">
            📞 Phone: <span onClick={copyToClipboard} className="copy-number">+91 7004535030</span>
          </p>
          <p className="info-item">
            ✉️ Email: <a href="mailto:sidsingh130698@gmail.com">sidsingh130698@gmail.com</a>
          </p>
          <p className="info-item">
            🔗 LinkedIn: <a href="https://linkedin.com/in/siddharthsingh13fullstackdev" target="_blank" rel="noopener noreferrer">linkedin.com/in/siddharthsingh13fullstackdev</a>
          </p>
          <p className="info-item">
            🐱 GitHub: <a href="https://github.com/Siddharth" target="_blank" rel="noopener noreferrer">github.com/Siddharth</a>
          </p>
        </div>
      </div>

      <a href={resume} download>
        <button className="download-button">
          Download My Resume
        </button>
      </a>
    </div>
  );
};

export default Contact;
