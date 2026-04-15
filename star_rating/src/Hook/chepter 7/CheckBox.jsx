// 체크 된 다음에 alert가 떠야하는 컴포넌트

import { useEffect, useReducer, useState } from 'react';

export default function CheckBox() {
  // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer((checked) => !checked, false);
  // reducer 함수의 초기 상태는 false다.
  // onChange 함수를 리듀서가 반환하는 두번째 값인 toggel로 설정한다. 두번째 함수는 reducer 함수를 호출해준다.

  /*function toggle() {
    setChecked((checked) => !checked);
    // 이 함수((checked) => !checked)를 이제 reducer라는 이름으로 부를 것이다.
    // reducer(리듀서) 함수 ? =>  현재 상태를 받아서 새 상태를 반환함.
  }*/

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        // onChange={() => setChecked((checked) => !checked)}
        // 이 코드가 위험한 이유 => 필요보다 너무 복잡함.
        // 똑같은 기능이지만 덜 위험한 toggle 기능을 추가해보자.
        onChange={toggle}
        // 이렇게 함으로서 onChane는 예측 가능한 결과를 내놓게 할 수 있다.
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
}

