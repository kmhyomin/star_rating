// 컴포넌트 성능 개선

import { memo } from 'react';

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <h1 onClick={() => meow(name)}>{name}</h1>;
});

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);

export const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name,
);
