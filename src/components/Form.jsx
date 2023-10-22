import React, { useState } from 'react';

export const Form = ({ getColors }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getColors(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <div className="formContainer">
        <form className="color-form" onSubmit={handleSubmit}>
          <section>
            <label htmlFor="color">Color:</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="text">Text:</label>
            <input
              type="text"
              placeholder="#ffffff"
              onChange={(e) => setColor(e.target.value)}
            />
          </section>

          <button
            type="submit"
            style={{ backgroundColor: color || 'black' }}
            className="btn"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
