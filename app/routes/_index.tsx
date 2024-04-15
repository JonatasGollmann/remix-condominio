import type { MetaFunction } from "@remix-run/node";
import bgPhoto from "/bgPhoto.jpg";
import icon from "/Icon.png";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dwell" },
    {
      name: "description",
      content:
        "Bem-vindo a Dwell uma plataforma de monitoramento de condominios.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-evenly w-screen h-screen bg-gradient-to-tr from-slate-100 to-slate-300 font-outfit">
      <div
        className="bg-custom-w1 w-[96vw] h-[80vh] bg-cover bg-bottom bg-blend-multiply rounded-2xl flex justify-center items-start drop-shadow-lg"
        style={{ backgroundImage: `url(${bgPhoto})` }}
      >
        <div className="m-4">
          <img src={icon} alt="Dwell Sistema Icone" className="h-8 m-auto" />
          <h1 className="text-custom-w1 tracking-wider text-lg font-extralight">Dwell</h1>
        </div>
      </div>
      <div className="flex w-[95vw] justify-between">
        <div>
          <h1 className="font-bold text-3xl text-custom-b0">Como vai seu condomínio hoje?</h1>
          <p className=" text-slate-500">Dwell é uma plataforma de monitoramento de condomínios.</p>
        </div>
        <div className="flex">
          <Link to={"/dashboard"} className=" bg-custom-b2 text-white hover:bg-custom-b1 font-light py-2 px-5 rounded-md m-2 drop-shadow-lg">Ver Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
