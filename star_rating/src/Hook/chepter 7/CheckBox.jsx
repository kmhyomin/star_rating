// 체크 된 다음에 alert가 떠야하는 컴포넌트

import { useEffect, useState } from 'react';

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`checked : ${checked.toString()}`);
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
}
