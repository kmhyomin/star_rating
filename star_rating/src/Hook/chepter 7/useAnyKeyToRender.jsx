// 키보드의 아무 키나 누를 때마다 해당 컴포넌트를 강제로 다시 렌더링하는 컴포넌트
import { useEffect, useState } from 'react';

export default function useAnyKeyToRender() {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener('keydown', forceRender);
    return () => window.removeEventListener('keydown', forceRender);
  }, []);
}
