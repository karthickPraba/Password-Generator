import React, { useState } from 'react';
import '../css/App.css'

const PasswordGeneratorForm = ({ length, setLength, includeNumbers, setIncludeNumbers, includeSymbols, setIncludeSymbols, keywords, setKeywords, dob, setDob, generatePassword }) => {
  const [error, setError] = useState('');

  const handleGeneratePassword = () => {
    if (length < 8) {
      setError('Password length must be at least 8 characters');
    } else {
      setError('');
      generatePassword();
    }
  };

  return (
    <div>
      <label>
        Password Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <br />
      <div className="checkbox-group">
        <label>
          Include Numbers
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <span className="checkmark"></span>
        </label>
        <br />
        <label>
          Include Symbols
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <br />
      <label>
        Keywords:
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="numbers"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleGeneratePassword}>Generate Password</button>
      {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
    </div>
  );
};

export default PasswordGeneratorForm;
