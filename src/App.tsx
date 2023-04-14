import { useState } from 'react';

function App() {
  const [list, setList] = useState<string[]>([
    'Medias',
    'Caramelos',
    'Vitel Tone',
  ]);

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-700 w-full h-full">
      <div className="flex gap-2 flex-col colum justify-center items-center h-screen place-items-center ">
        <div className=" p-10 rounded-lg bg-green-200">
          <h1 className="text-4xl font-bold mb-5  ">
            {' '}
            <span className="text-3xl">🎁</span>Regalos{' '}
          </h1>
          <div className="flex-row">
            <ul>
              {list?.map((list: string) => {
                return <li>{list}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
