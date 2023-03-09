import { HomeIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="h-screen flex flex-row px-20  bg-gradient-to-r from-purple-500 to-pink-500 ">
      <div className="text-6xl flex flex-col items-center justify-center w-2/4 px-8 gap-y-20 space-y-40 p-10">
        <div className="drop-shadow-lg before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <h1 className=" text-slate-300 font-medium   drop-shadow-lg text-white	relative   md:block hidden">
            Bem vindo ao TearDown Tracker!{" "}
          </h1>
        </div>
        <div className="md:block hidden ">
          <TypeAnimation
            className="text-gray-300 italic drop-shadow-lg"
            sequence={["Uma Ferramenta Lenovo.", 10000, ""]}
            speed={20}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-2/4 flex-col gap-14 md:flex mr-16">
        <Link to="/login">
          <button className="px-4 py-8 w-80 text-3xl text-gray-300 font-black italic rounded-lg drop-shadow-lg bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500 ... font-semibold">
            Fazer Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-8 w-80 text-3xl text-gray-300 font-black italic rounded-lg drop-shadow-lg d bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500 ... font-semibold">
            Criar uma conta
          </button>
        </Link>
      </div>
    </div>
  );
}
