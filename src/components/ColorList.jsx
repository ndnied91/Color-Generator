import React from 'react';
import { nanoid } from 'nanoid';

import SingleColor from './SingleColor';

export const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const id = nanoid();
        return <SingleColor key={id} color={color} index={index} />;
      })}
    </section>
  );
};
