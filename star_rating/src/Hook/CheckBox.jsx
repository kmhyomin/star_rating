// 체크 된 다음에 alert가 떠야하는 컴포넌트

import { useEffect, useState } from 'react';

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`checked : ${checked.toString()}`);
  }, [checked]);
  // useEffect는 랜더러가 부수 효과로 무언가 수행하게 하고 싶을 때 사용한다.
  // useEffect는 랜더링이 끝난 다음에 발생하는 함수 같은거라서 항상 최종값에 접근할 수 있다.
  // 부수효과 => 함수가 반환하는 값에 속하지는 않는 어떤것
  // UI 랜더링 외에 컴포넌트가 수행해야하는 일을 Effect(효과)라고 부른다.

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
