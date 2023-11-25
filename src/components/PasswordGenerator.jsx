import React, { useState } from 'react';
import PasswordGeneratorForm from './PasswordGeneratorForm';
import PasswordDisplay from './PasswordDisplay';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [keywords, setKeywords] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const generatePassword = () => {
    const minPasswordLength = 8;

    // Check if the password length is at least 8 characters
    if (length < minPasswordLength) {
      setError('Password length must be at least 8 characters');
      return;
    }

    setError('');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = `${uppercaseChars}${lowercaseChars}`;
    validChars += includeNumbers ? numberChars : '';
    validChars += includeSymbols ? symbolChars : '';

    // Extract numbers from the date of birth
    const dobNumbers = dob.replace(/\D/g, '');

    let generatedPassword = '';

    // Concatenate processed keywords
    generatedPassword += keywords
      .split('')
      .map((char) => (Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase()))
      .join('');

    // Add numbers from date of birth
    for (let i = 0; i < dobNumbers.length; i++) {
      generatedPassword += dobNumbers[i];
    }

    // Add random characters to reach the specified length
    while (generatedPassword.length < length) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.charAt(randomIndex);
    }

    // Shuffle the password
    generatedPassword = generatedPassword.split('').sort(() => Math.random() - 0.5).join('');

    // Trim the password to the specified length
    generatedPassword = generatedPassword.slice(0, length);

    setPassword(generatedPassword);
  };

  return (
    <div>
      <h1>Password Generator App</h1>
      <PasswordGeneratorForm
        length={length}
        setLength={setLength}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
        keywords={keywords}
        setKeywords={setKeywords}
        dob={dob}
        setDob={setDob}
        generatePassword={generatePassword}
      />
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      <br />
      <PasswordDisplay password={password} />
    </div>
  );
};

export default PasswordGenerator;
