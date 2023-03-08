import { HomeIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-auto justify-between h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <HomeIcon className="h-6 w-6 text-blue-500" />
      <div className="text-6xl flex flex-col items-center justify-center container mx-auto px-1 border-sky-500  gap-y-20 space-y-20 p-10">
        <h1>Bem vindo ao TierDown Tracker! </h1>
        <TypeAnimation
          className="text-gray-300 italic "
          sequence={["Uma Ferramenta Lenovo.", 10000, ""]}
          speed={20}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>

      <div className="container flex items-center justify-center">
        <Link to="/login">
          <button>Fazer Login</button>
        </Link>
        <Link to="/signup">
          <button>Criar uma conta</button>
        </Link>
      </div>
    </div>
  );
}
