import { useEffect, useMemo } from 'react';
import useAnyKeyToRender from './useAnyKeyToRender';

export default function WordCount({ children = '' }) {
  useAnyKeyToRender();

  const word = useMemo(() => children.split(' '), [children]);

  useEffect(() => {
    console.log('fresh render');
  }, [word]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{word.length} - words</strong>
      </p>
    </>
  );
}
