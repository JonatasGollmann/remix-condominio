import { CollectionMoradores } from "@prisma/client";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { obterUsuario } from "~/services/db.api";
import dbPrismaConexao from "~/services/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  const usuarioId = params.userid as string;
  const usuarioData = await obterUsuario(usuarioId);
  return { usuario: usuarioData };
};

export const action: ActionFunction = async ({ request, params }) => {
  const userid = params.userid;
  const dados = Object.fromEntries(await request.formData());
  //console.log(dados);
  //console.log(userid);

  await dbPrismaConexao.collectionMoradores.update({
    where: {
      id: params.userid,
    },
    data: {
      nome: dados.nome as string,
      cidade: dados.cidade as string,
      dataNasc: dados.nascimento as string,
      tel: dados.telefone as string,
      aps: dados.aps as string,
      status: dados.statusUsuario as string,
    },
  });
  return redirect("..");
};

export default function Profile() {
  const { usuario: usuarioData } = useLoaderData<CollectionMoradores>();
  //console.log(usuarioData);
  return (
    <div className="w-[30%] ">
      
      <Form
        method="POST"
        className="h-screen bg-gradient-to-br from-custom-b3 to-custom-b0 flex flex-col justify-center items-center rounded-l-3xl"
      >
        <Link to={".."} className="mr-auto ml-8 mb-4 text-sm text-custom-w1">Voltar</Link>
        <div className="w-4/5">
          <div className="w-full">
            <div className="text-xl font-bold text-custom-y2">
              <h3>Atualizar Usuario</h3>
            </div>
            <div>
              <div className="flex flex-col w-full py-2">
                <label htmlFor="nome" className="text-sm text-custom-w1">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  defaultValue={usuarioData.nome}
                  className="h-10 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full py-2">
                <label htmlFor="cidade" className="text-sm text-custom-w1">
                  Cidade
                </label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  defaultValue={usuarioData.cidade}
                  className="h-10 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full py-2">
                <label htmlFor="nascimento" className="text-sm text-custom-w1">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  name="nascimento"
                  id="nascimento"
                  pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                  defaultValue={usuarioData.dataNasc}
                  className="h-10 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full py-2">
                <label htmlFor="telefone" className="text-sm text-custom-w1">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  defaultValue={usuarioData.tel}
                  className="h-10 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full py-2">
                <label htmlFor="aps" className="text-sm text-custom-w1">
                  Apartamento
                </label>
                <input
                  type="text"
                  name="aps"
                  id="aps"
                  defaultValue={usuarioData.aps}
                  className="h-10 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full py-2">
                <label htmlFor="statusUsuario" className="text-sm text-custom-w1">
                  Status
                </label>
                <select
                  name="statusUsuario"
                  id="statusUsuario"
                  defaultValue={usuarioData.status}
                  className="h-10 p-2 rounded-lg"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Invalido">Invalido</option>
                  <option value="Sem Pagamento">Sem pagamento</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button type="submit" className="py-2 px-8 bg-custom-y1 hover:bg-custom-y2 transition-all rounded-lg drop-shadow-lg">
              Atualizar
            </button>
            <Link to={"delete"} className="py-2 px-8 bg-red-600 hover:bg-red-700 transition-all drop-shadow-lg rounded-lg">
              Deletar
            </Link>
          </div>
          <Outlet />
        </div>
      </Form>
    </div>
  );
}
