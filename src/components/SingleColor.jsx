import React from 'react';
import { toast } from 'react-toastify';

export const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Saved #${hex} to clipboard`);
      } catch (e) {
        toast.error('Failed to copy');
      }
    } else {
      toast.error('Cant use clipboard');
    }
  };

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value"> #{hex}</p>
    </article>
  );
};

export default SingleColor;
