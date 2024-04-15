import { ActionFunction, MetaFunction, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import dbPrismaConexao from "~/services/db.server";
import {
  validadeteAps,
  validadeteTelefone,
  validateCidade,
  validateNome,
} from "~/services/validacao";

export const meta: MetaFunction = () => {
  return [{ title: "Dwell | Novo Usuário" }];
};

export const action: ActionFunction = async ({ request }) => {
  const dados = Object.fromEntries(await request.formData());
  console.log(dados);

  const formErrors = {
    name: validateNome(dados.nome as string),
    cidade: validateCidade(dados.cidade as string),
    telefone: validadeteTelefone(dados.telefone as string),
    aps: validadeteAps(dados.aps as string),
  };

  if (Object.values(formErrors).some(Boolean)) return { formErrors };

  await dbPrismaConexao.collectionMoradores.create({
    data: {
      nome: dados.nome as string,
      cidade: dados.cidade as string,
      dataNasc: dados.nascimento as string,
      status: dados.statusUsuario as string,
      tel: dados.telefone as string,
      aps: dados.aps as string,
    },
  });
  return redirect("..");
};

export default function novousuario() {
  const actionData = useActionData();
  console.log(actionData);

  return (
    <div className="w-[30%]">
      <form method="POST">
        <div className=" h-screen bg-gradient-to-br from-custom-b3 to-custom-b0 flex flex-col justify-center items-center rounded-l-3xl drop-shadow-xl">
          <Link to={".."} className="mr-auto ml-8 mb-4 text-sm text-custom-w1">
            Voltar
          </Link>
          <div className="w-4/5">
            <div className="text-xl text-custom-y1 font-bold">
              <h3>Criar Usuario</h3>
            </div>
            <div>
              <div className="flex flex-col w-full py-2 ">
                <label htmlFor="nome" className="text-sm text-custom-w1">
                  Nome:
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Digite seu nome."
                  className="h-10 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="cidade" className="text-sm text-custom-w1">
                  Cidade:
                </label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="Digite sua cidade."
                  className="h-10 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="nascimento" className="text-sm text-custom-w1">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  name="nascimento"
                  id="nascimento"
                  pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                  className="h-10 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="telefone" className="text-sm text-custom-w1">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  placeholder="Digite seu telefone."
                  pattern="(\(?\d{2}\)?\s?)?(\d{4,5}\-\d{4})"
                  className="h-10 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="aps" className="text-sm text-custom-w1">
                  Apartamento
                </label>
                <input
                  type="text"
                  name="aps"
                  id="aps"
                  placeholder="Digite seu apartamento."
                  className="h-10 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="statusUsuario" className="text-sm text-custom-w1">
                  Status
                </label>
                <select
                  name="statusUsuario"
                  id="statusUsuario"
                  required
                  className="h-10 p-2 rounded-lg"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Invalido">Invalido</option>
                  <option value="Sem Pagamento">Sem pagamento</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <button className="bg-custom-y1 hover:bg-custom-y2 drop-shadow-lg py-2 px-10 rounded-lg mt-8 w-full" type="submit">Criar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
