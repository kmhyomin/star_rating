import { useColor } from '../Hook/useColor.jsx';
import useInput from '../Hook/useInput.jsx';

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColor();
  // 이 줄이 추가됨으로써 함수를 prop로 받지 않고도 색을 직접추가할 수 있다.

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="색 제목..." required />
        <input {...colorProps} type="color" required />
        <button>ADD</button>
      </form>
    </>
  );
}
