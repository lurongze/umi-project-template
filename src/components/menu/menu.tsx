import { useState } from 'react';

function Menu() {
  const [num, setNum] = useState<number>(0);

  if (num !== 0) {
    throw new Error('Menu Error');
  }

  return <div onClick={() => setNum(num + 1)}>I&apos;m is Menu Componet</div>;
}

export default Menu;
