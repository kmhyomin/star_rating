// 콘텍스트 프로바이더를 랜더링하는 상태가 있는 커스텀 프로바이더

import { createContext, useState } from "react";
import { color } from "../color-data.jsx";
import { v4 } from "uuid";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(color);
  // color의 초기 데이터는 colorTree에서 가져옴.

  const addColor = (title, color) => {
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color)),
      // color-data.jsx를 map 돌림
      // item이름을 color로 짓고 color-data.jsx의 id과 props로 받은 item의 is가
      // 같으면 스프레드 연산자로 풀어주고, rating만 받은 값으로 덮어 씌우는 것.
      // 그게 아니면 color, 즉 클릭이 된 객체 하나만 반환해주는건.
      // 왜 끝에 colors가 안되는가
      // colors를 반환하게 되면 애초에 전체 배열을 map으로 돌리는거라 특성에 따라
      //  하나하나 다 돌게 되고, 그때마다 참 거짓을 분별하다보니 건들지 않았어도
      // 건들지 않은 값에 대해 반환하는지라 colors. 즉, 뭉탱이를 뭉탱이 안의
      // 객체에 넣어버려서 뭉탱이 객체 하나, 뭉탱이 보따리 , 뭉탱이 객체 하나
      // 가 되는 것.
    );
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
