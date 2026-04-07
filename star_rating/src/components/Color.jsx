import { FaTrash } from "react-icons/fa";
import StarPoint from "./StarPoint";
import { useColor } from "../Hook/useColor.jsx";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColor();
  // porps로 받던 삭제와 점수 매기기를 직접 얻을 수 있다.
  // 고로 함수 props을 부모에게 받지 않아도 된다.

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div
        style={{
          height: "50px",
          backgroundColor: color,
        }}
      />
      <StarPoint
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
