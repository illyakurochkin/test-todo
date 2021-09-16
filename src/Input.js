import React, {useState} from 'react';

const Input = ({value, onChange}) => {
  const [error, setError] = useState();

  const handleChange = (newValue) => {
    onChange(newValue);
    if(newValue.match(/^[a-zA-Z0-9 ]*$/)) {
      setError(null)
    } else {
      setError('Not valid');
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {error && <div>{error}</div>}
    </div>
  )
};

export default Input;
