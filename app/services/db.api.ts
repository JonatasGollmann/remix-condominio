import { CollectionMoradores } from "@prisma/client";
import dbPrismaConexao from "./db.server";

export async function obterUsuarios(): Promise<CollectionMoradores[]> {
    return await dbPrismaConexao.collectionMoradores.findMany({
        orderBy: {
          nome: "asc",
        }});
}

export async function obterUsuario(userId: string) {
    return await dbPrismaConexao.collectionMoradores.findUnique({
        where:{
            id:userId,
        }
    })
}
