import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import dbPrismaConexao from "~/services/db.server";

export const action: ActionFunction = async ({params,request}) => {
  const dados = Object.fromEntries(await request.formData())
  const userId = await params.userid;
    await dbPrismaConexao.collectionMoradores.delete({
        where: {
            id: userId,
        }
    })
    return redirect("/dashboard");
};

export default function () {
  return (
    <form className="flex flex-col justify-center items-center my-4" method="POST">
      <p className="text-custom-w1">Você realmente deseja excluir o morador?</p>
      <button type="submit" className="px-4 py-2 mt-2 bg-red-600 rounded-lg w-1/2 hover:bg-red-700 transition-all drop-shadow-lg rounded-lg">Sim, deletar</button>
    </form>
  );
}
