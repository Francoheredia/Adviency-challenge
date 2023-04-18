import { useState } from 'react';

interface Gift {
  id?: string;
  name: string;
}

function App() {
  const [gift, setGift] = useState<Gift>({ name: '' });
  const [list, setList] = useState<Gift[]>([
    {
      id: 'sw2',
      name: 'Medias',
    },
    {
      id: '21s',
      name: 'Play 4',
    },
    {
      id: 's2333',
      name: 'Pelota',
    },
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGift({ name: e.target.value });
  };

  const addGift = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setList([...list, gift]);
  };

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover bg-inherit  "
      style={{
        backgroundImage: `url(
          'https://i.ibb.co/QNxhZ5T/Blue-Simple-Minimalist-Beach-Tour-and-Travel-Banner-3.png')`,
      }}
    >
      <div className="flex gap-2 flex-col colum justify-center items-center h-screen place-items-center  ">
        <div className=" h-300px w-80 px-8  py-5 rounded-2xl bg-gradient-to-b from-white via-red-100 to-transparent shadow-sm relative">
          <div className="bg-white p-5 rounded-xl h-full">
            <h1 className="text-4xl font-bold mb-10  ">
              <span className="text-3xl">🎁</span>Regalos:{' '}
            </h1>
            <div className="flex flex-col  justify-center items-center  ">
              <input
                type="text"
                name="gift"
                onChange={onChange}
                placeholder="Agregar regalo"
                className="w-full px-4 py-2 text-gray-500 outline-none bg-gradient-to-t from-neutral-200 via-red-100 to-red-100 rounded-xl mb-2
            "
              />
              <button
                onClick={addGift}
                className="m-2 rounded-3xl  py-2 bg-red-600 text-white font-semibold w-full"
              >
                Agregar
              </button>
            </div>
            <div className="flex-row mt-5">
              <ul>
                {list?.map((list: Gift) => {
                  return (
                    <div className="flex items-center  justify-between rounded-xl px-2 py-1 bg-gradient-to-t from-neutral-200 via-red-100 to-red-100  mb-1 ">
                      <p>{list.name}</p>
                      <button>
                        {' '}
                        <img
                          className="h-8 w-6"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Icons8_flat_delete_generic.svg/800px-Icons8_flat_delete_generic.svg.png"
                          alt=""
                        />{' '}
                      </button>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
