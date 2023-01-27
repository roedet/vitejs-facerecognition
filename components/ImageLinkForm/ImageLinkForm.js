import React from 'react';

const imagelinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p>Give link</p>
      <div>
        <input type="text" onChange={onInputChange} />
        <button onClick={onSubmit}>press</button>
      </div>
    </div>
  );
};

export default imagelinkForm;
