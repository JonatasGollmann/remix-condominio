import { CollectionMoradores } from "@prisma/client";
import { Link, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { obterUsuarios } from "~/services/db.api";
import icon from "/IconCor.png";


export const meta: MetaFunction = () => {
  return [
    { title: "Dwell | Dashboard" },
  ];
};

interface LoaderData {
  usuarios: CollectionMoradores[];
}

export const loader = async () => {
  const usuarios = await obterUsuarios();

  return { usuarios };
};

export default function Dashboard() {
  const usuariosdb = useLoaderData<LoaderData>();
  // console.log(usuariosdb);

  return (
    <div className="w-screen h-screen bg-gradient-to-tr to-slate-100 from-custom-w1 flex justify-center">
      <div className="w-[70%]">
        <div className="h-[15%] mx-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src={icon} alt="Icone da Dwell" className="h-6 mr-4" />
            <h1 className=" text-2xl font-semibold text-custom-b0 ">
              Dashboard
            </h1>
          </div>
          <Link to={'novousuario'} className="bg-custom-b1 p-3 rounded-xl text-custom-w1 hover:bg-custom-b0 transition-all drop-shadow-xl">Novo usuario</Link>
        </div>

        <div className="h-[85%] rounded-t-3xl p-8 mx-6 drop-shadow-lg bg-slate-100  overflow-auto ">
          <div className="flex justify-between mb-4 text-center">
            <h1 className="text-sm w-1/5 text-slate-400">Moradores</h1>
            <h1 className="text-sm w-1/5 text-slate-400">Cidade</h1>
            <h1 className="text-sm w-1/5 text-slate-400">Telefone</h1>
            <h1 className="text-sm w-1/5 text-slate-400">Apartamento</h1>
            <h1 className="text-sm w-1/5 text-slate-400">Status</h1>
          </div>

          {usuariosdb.usuarios.map((usuario) => (
            <Link reloadDocument to={`${usuario.id}`} key={usuario.id} >
            <div className="flex justify-between items-center bg-white hover:bg-custom-w1 hover:drop-shadow-sm transition-all text-center py-3 mb-2 rounded-xl">
              <div className="w-1/5 pl-4 text-start border-l-2 border-custom-b0">
                <h2>{usuario.nome}</h2>
                <p className="text-xs text-start">{usuario.dataNasc}</p>
              </div>
              <h1 className="w-1/5">{usuario.cidade}</h1>
              <h1 className="w-1/5 text-sm">{usuario.tel}</h1>
              <h1 className="w-1/5">{usuario.aps}</h1>
              <h1 className="w-1/5">{usuario.status}</h1>
            </div>
          </Link>
          ))}
        </div>
      </div>
      <Outlet />
      
    </div>
  );
}

// <div className="w-3/4 h-full">
//           <h1 className="text-2xl">DashBoard</h1>
//
//         </div>
//         <div>
//           <Link to={"novousuario"}>Novo usuario</Link>
//           <Outlet />
//         </div>
