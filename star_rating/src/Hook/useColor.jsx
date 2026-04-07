import { createContext, useContext } from "react";
const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);
// 이게 왜 필요한가?
// 그냥 짧게 부르려고
// 그냥!
