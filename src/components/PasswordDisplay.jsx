import React from 'react';
import '../css/App.css'
import '../css/App.css'

const PasswordDisplay = ({ password }) => {
  return (
    <div className='con'>
      <bold className='passdis'>Here comes your new Password:</bold> <strong> {password}</strong>
    </div>
  );
};

export default PasswordDisplay;
