import { useState } from 'react';
import { ColorList } from './components/ColorList';
import { Form } from './components/Form';
import { ToastContainer, toast } from 'react-toastify';

import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const getColors = (color) => {
    try {
      const colorWheel = new Values(color).all(10);
      setColors(colorWheel);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <main>
      <Form getColors={getColors} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
