import { HomeIcon } from '@heroicons/react/24/solid';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className=" h-screen flex flex-row px-20  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="text-6xl flex flex-col items-center justify-center w-2/4 px-1 gap-y-20 space-y-40 p-10 md: hidden ">
        <h1 className="italic text-white	font-semibold">
          Bem vindo ao TearDown Tracker!{' '}
        </h1>
        <TypeAnimation
          className="text-gray-300 italic drop-shadow-lg "
          sequence={['Uma Ferramenta Lenovo.', 10000, '']}
          speed={20}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>

      <div className="flex items-center justify-center w-2/4 flex-col gap-14 md:  flex justify-center	items-center">
        <Link to="/login">
          <button className=" bg-indigo-500 px-4 py-8 w-80 text-3xl text-gray-300 italic rounded-lg drop-shadow-md hover:bg-indigo-600 font-semibold">
            Fazer Login
          </button>
        </Link>
        <Link to="/signup">
          <button className=" bg-indigo-500 px-4  py-8 w-80 text-3xl text-gray-300 italic rounded-lg drop-shadow-md hover:bg-indigo-600 font-semibold">
            Criar uma conta
          </button>
        </Link>
      </div>
    </div>
  );
}
