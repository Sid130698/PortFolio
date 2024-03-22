import React from 'react';

const Company = ({ logo, name }) => {
  return (
    <div className='company' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
      <img src={logo} className='company-image' alt='Company Logo' />
      <div style={{ textAlign: 'center' }}>{name}</div>
    </div>
    </div>
    
  );
};

export default Company;
