import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [heigh, setHeigh] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeigh(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return [`width : ${width}, heigh : ${heigh}`];
}

export default useWindowSize;
