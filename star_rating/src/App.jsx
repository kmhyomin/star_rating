import { useState } from 'react';
import { PureCat } from './Hook/chepter 7/Cat.jsx';

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat
          key={i}
          name={name}
          meow={(name) => console.log(`${name} has meowed!`)}
        />
      ))}

      <button onClick={() => setCats([...cats, prompt('name a cat')])}>
        Add a cat
      </button>
    </>
  );
}

export default App;
