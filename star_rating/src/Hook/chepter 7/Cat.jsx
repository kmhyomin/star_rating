// 컴포넌트 성능 개선

import { memo } from 'react';

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <h1 onClick={() => meow(name)}>{name}</h1>;
});

const RenderCatOnce = memo(Cat, () => true)
// 처음 마운트 될 때 말곤 평생동안 다시 그려지지 않음
const AlwaysRenderCat = memo(Cat, () => false);
// 랜더링 할때마다 무적권 다르다고 하는 것 => 사실상 쓸모 없뜸
export const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name,
);
