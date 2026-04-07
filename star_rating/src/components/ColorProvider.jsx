// 콘텍스트 프로바이더를 랜더링하는 상태가 있는 커스텀 프로바이더

import { createContext, useState } from "react";
import { color } from "../color-data.jsx";
import { v4 } from "uuid";

const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(color);
  // color의 초기 데이터는 colorTree에서 가져옴.

  const addColor = (title, color) => {
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color)),
    );
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {/* ColorContext.Provider를 랜더링함. 원래 있던 setColors는 없앰. */}
      {/* 왜냐? 추가, 삭제, 평점 매기기의 3가지 동작 밖에 안하는데, 그 이상의 권한을 주는 setColors를 줘버리면 버그가 날 수 있기 때문이다.*/}
      {/* 그리고 setColor를 추가함으로써 자식이 color 값을 수정할 수 있도록 함*/}
      {/* value 프로퍼티를 통해 콘텍스트에 설정 => 선언적 의존성 주입*/}
      {/* ColorProvider 안에서 랜더링되는 모든 자식 컴포넌트를 */}
      {/*ColorContext.provider에서 감싸기 때문에 모든 자식이 콘텍스트로부터 colors를 얻을 수 있다*/}
      {/* import 대신 프로바이더를 쓰는 이유=========================*/}
      {/* import는 정적 데이터(읽기전용)라 colorTree에서 데이터를 가져오면*/}
      {/* 사용자가 화면에서 색상을 추가하거나 없애도, 원본 파일 데이터나 화면은 업데이트 하지 않는다 */}
      {/* Context를 쓰면 상태, State를 공유하므로 그 데이터를 사용하는 모든 컴포넌트를 재랜더링 시켜준다 */}
      {/* 2. 데이터 동기화가 안된다 */}
      {/* 똑같은 자식일지도 각자 import를 해왔기 때문에 변경 사항에 대해서 동기화가 어렵다*/}
      {/* 이걸 놔둘 경우, A 화면에서 지웠던게 B 화면에는 그대로 남아있다거나 할 수 있다 */}
      {children}
    </ColorContext.Provider>
  );
}
