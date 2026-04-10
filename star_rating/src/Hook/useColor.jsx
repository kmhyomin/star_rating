import { useContext } from "react";
import { ColorContext } from "../components/ColorProvider";

export const useColor = () => useContext(ColorContext);
